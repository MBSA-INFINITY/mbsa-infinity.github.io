# Kubernetes Workload Controllers: The Definitive Technical Guide

A deep-dive architectural reference comparing **ReplicaSet**, **Deployment**, **StatefulSet**, and **DaemonSet**.

## Table of Contents

1. **Executive Summary & Mental Models**
2. **The Kubernetes Control Loop Foundation**
3. **ReplicaSet (RS): The Scaling Engine**
4. **Deployment: The Release Orchestrator**
5. **StatefulSet (STS): Identity, Order, and State**
6. **DaemonSet (DS): The Node-Infrastructure Anchor**
7. **Comprehensive Comparison Matrix**
8. **Edge Cases, Failure Modes & Gotchas**
9. **Architectural Decision Tree**

---

## 1. Executive Summary & Mental Models

In Kubernetes, workloads are categorized by **identity**, **state**, and **placement**:

```text
[ Workload Type ]
        |
        +-----------------------+-----------------------+
        |                                               |
 [ Node-Centric ]                             [ Application-Centric ]
        |                                               |
        v                               +---------------+---------------+
  DaemonSet                            |                               |
  (1 Pod per Node)               [ Stateless ]                    [ Stateful ]
                                       |                               |
                                       v                               v
                                  Deployment                      StatefulSet
                                  (via ReplicaSet)                (Unique Identity,
                                  (Fungible/Cattle)                Ordered, Pets)
```

### Quick mental model

| Resource | Plain-English Analogy | Core Responsibility |
| --- | --- | --- |
| **ReplicaSet** | The accountant with a counter | Ensures exactly N identical Pods match a label selector |
| **Deployment** | The release manager | Orchestrates rolling updates, rollbacks, and ReplicaSet lifecycles |
| **StatefulSet** | The registry office | Manages identity, ordering, and dedicated storage per replica |
| **DaemonSet** | The facility maintenance crew | Ensures every selected node runs a copy of a background pod |

---

## 2. The Kubernetes Control Loop Foundation

Every workload resource in Kubernetes operates through a **reconciliation loop** inside the `kube-controller-manager`:

```text
Observed Cluster State
        ↓
   Reconcile()
        ↓
Δ = Desired Spec State − Actual State
        ↓
   CRUD operations to drive Δ → 0
```

The controller:

- watches events from the API server / etcd
- calculates the delta between desired and actual state
- reconciles the cluster back to the desired state

### Ownership chain

```text
[ Deployment Controller ]
        │ Watches Deployment Spec
        ▼ Creates / Updates / Scales
[ ReplicaSet Controller ]
        │ Watches ReplicaSet Spec
        ▼ Creates / Deletes
[ Pods ] ◄────────────────── Managed directly by [ StatefulSet / DaemonSet Controllers ]
```

**Key idea:** a Deployment does not create Pods directly. It manages ReplicaSets, and the ReplicaSets create Pods. StatefulSets and DaemonSets manage Pods more directly.

---

## 3. ReplicaSet (RS): The Scaling Engine

A **ReplicaSet** guarantees that a stable set of replica Pods is running at any given time.

### 3.1 Technical mechanics

A ReplicaSet uses **label selectors** and a desired replica count to ensure Pod cardinality.

- **Selector matching:** uses `matchLabels` or `matchExpressions`
- **Ownership:** when it creates a Pod, it sets an `ownerReference`
- **Adoption:** unmanaged Pods with matching labels are adopted
- **Quarantine:** if the label is removed, the RS abandons the Pod and creates a replacement

```yaml
ownerReferences:
  - apiVersion: apps/v1
    kind: ReplicaSet
    name: frontend-rs-6d8bf
    uid: 5b6c8914-cf3d-4c3a-9694-3a562ef2a2c1
    controller: true
    blockOwnerDeletion: true
```

### 3.2 Manifest anatomy

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: api-gateway-rs
  labels:
    tier: api
spec:
  replicas: 3
  selector:
    matchLabels:
      tier: api
  template:
    metadata:
      labels:
        tier: api
    spec:
      containers:
      - name: gateway
        image: envoyproxy/envoy:v1.28.0
```

### 3.3 Why ReplicaSets are not used directly

A ReplicaSet does **not** perform application updates.

If you change:

```yaml
image: envoy:v1.28.0
```

to:

```yaml
image: envoy:v1.29.0
```

and the desired replica count is still `3`, the controller sees:

```text
Current (3) == Desired (3)
```

and does nothing. The new image only takes effect when a Pod is recreated or a crash occurs.

**Conclusion:** ReplicaSet is the primitive for count enforcement, not for release orchestration.

---

## 4. Deployment: The Release Orchestrator

A **Deployment** provides declarative updates for Pods and ReplicaSets. It abstracts the version-blind problem of ReplicaSets.

```text
Deployment: "order-service"
        │
   ┌────┴───────────────────────┐
   ▼                           ▼
ReplicaSet-v1 (Old)         ReplicaSet-v2 (Active)
[hash: 7d488587d6]           [hash: 86b59f7b4f]
replicas: 0                  replicas: 3
                              ├── Pod-86b59f7b4f-a1b2c
                              ├── Pod-86b59f7b4f-d3e4f
                              └── Pod-86b59f7b4f-g5h6i
```

### 4.1 Under the hood: rolling updates

When the Pod template changes, the Deployment controller:

1. computes a 32-bit FNV-1a hash of the new template
2. creates a new ReplicaSet named `<deployment-name>-<pod-template-hash>`
3. scales the new ReplicaSet up while scaling down the old one

The process is bounded by two safety controls:

- **maxSurge**: extra Pods above desired count allowed during rollout
- **maxUnavailable**: how many Pods can be unavailable during rollout

```yaml
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 25%          # Can create 25% extra pods above desired during rollout
      maxUnavailable: 0      # Guarantees zero downtime by never dropping below 100% capacity
```

#### Effective limits

```text
Active Pod Limit = spec.replicas + maxSurge
Minimum Available = spec.replicas - maxUnavailable
```

### 4.2 Rollbacks and revision history

Old ReplicaSets are not immediately deleted after a successful rollout. They are scaled down to `0` and kept for rollback history.

The field `spec.revisionHistoryLimit` (default: `10`) controls how many historical ReplicaSets are retained.

Running:

```bash
kubectl rollout undo deployment/<name>
```

simply tells the Deployment to scale the older ReplicaSet back up to `N` and scale the broken one down to `0`.

### 4.3 Pod identity and storage limitations

Deployments use **cattle semantics**. Pod names are random and ephemeral, with double-random hashes such as:

```text
web-7d488587d6-9x8zk
```

If the Pod terminates, its replacement gets a new random name and IP.

This is a problem for stateful workloads attached to a **ReadWriteOnce** volume (EBS, Azure Disk, GPD):

```text
Warning  FailedAttachVolume  Multi-Attach error for volume "vol-12345"
Volume is already exclusively attached to one node and can't be attached to another.
```

**Avoid direct RWO volumes on multi-replica Deployments.**

---

## 5. StatefulSet (STS): Identity, Order, and State

A **StatefulSet** manages applications that require:

- stable network identities
- ordered deployment and termination
- persistent storage per replica

### 5.1 Pillar 1: deterministic ordinal indexing

For a StatefulSet with `replicas: 3`, Pods are assigned fixed ordinals:

```text
{0, 1, 2, ..., N-1}
```

```text
Pods:  [ cache-0 ] ───► [ cache-1 ] ───► [ cache-2 ]
Startup Order: cache-0 is initialized first. cache-1 is not created until cache-0 is Ready.
Shutdown Order: cache-2 terminates before cache-1, then cache-0.
```

> A StatefulSet can bypass ordered startup using `spec.podManagementPolicy: "Parallel"`, but the identity semantics remain.

### 5.2 Pillar 2: headless services and stable network identity

StatefulSets require a **Headless Service** (`clusterIP: None`).

The Kubernetes DNS plugin generates deterministic SRV and A/AAAA records:

```text
${POD_NAME}.${SERVICE_NAME}.${NAMESPACE}.svc.cluster.local
```

```text
CoreDNS Resolver
      │
  ┌───┼───────┬────────────┐
  ▼   ▼       ▼            ▼
kafka-0.kafka-hs  kafka-1.kafka-hs  kafka-2.kafka-hs
(10.244.1.42)    (10.244.2.89)    (10.244.3.15)
```

If `kafka-1` is recreated on a different node, it may get a different IP, but its DNS name stays the same:

```text
kafka-1.kafka-hs
```

This preserves stable identity for peers and cluster membership.

### 5.3 Pillar 3: dedicated storage via `volumeClaimTemplates`

A Deployment shares a volume definition. A StatefulSet creates **one unique PVC per replica**.

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: redis-cluster
spec:
  serviceName: "redis-headless"
  replicas: 3
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - name: redis
        image: redis:7.2-alpine
        volumeMounts:
        - name: redis-data
          mountPath: /data
  volumeClaimTemplates:
  - metadata:
      name: redis-data
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: "gp3-sc"
      resources:
        requests:
          storage: 100Gi
```

This creates objects like:

```text
Pod redis-cluster-0  ↔  PVC redis-data-redis-cluster-0  ↔  PV-Alpha
Pod redis-cluster-1  ↔  PVC redis-data-redis-cluster-1  ↔  PV-Beta
```

> **Critical safety rule:** scaling down a StatefulSet does not delete the associated PVCs or PVs. This prevents catastrophic data loss.

---

## 6. DaemonSet (DS): The Node-Infrastructure Anchor

A **DaemonSet** ensures that all, or a selected subset of, nodes run exactly one copy of a Pod.

```text
Worker Nodes
      Node Alpha                 Node Beta                 Node Gamma
+--------------------+   +--------------------+   +--------------------+
| [DaemonSet: Prom]  |   | [DaemonSet: Prom]  |   | [DaemonSet: Prom]  |
| [DaemonSet: Cilium]|   | [DaemonSet: Cilium]|   | [DaemonSet: Cilium]| 
|                    |   | [App: User API]    |   | [App: Payment API] |
+--------------------+   +--------------------+   +--------------------+
```

### 6.1 Modern scheduling mechanics

Historically, the DaemonSet controller directly assigned Pod to nodes by setting `.spec.nodeName`.

In modern Kubernetes:

- the DaemonSet controller creates Pods with implicit **NodeAffinity**
- the default kube-scheduler handles placement
- this preserves support for pod priorities, preemption, and scheduler plugins

### 6.2 Bypassing node taints

Control-plane nodes typically carry a taint such as:

```text
node-role.kubernetes.io/control-plane:NoSchedule
```

Infrastructure DaemonSets bypass this by using **tolerations**:

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: node-exporter
  namespace: monitoring
spec:
  selector:
    matchLabels:
      app: node-exporter
  template:
    metadata:
      labels:
        app: node-exporter
    spec:
      hostNetwork: true
      hostPID: true
      tolerations:
      - operator: Exists
        effect: NoSchedule
      - operator: Exists
        effect: NoExecute
      containers:
      - name: node-exporter
        image: prom/node-exporter:v1.7.0
        volumeMounts:
        - name: proc
          mountPath: /host/proc
          readOnly: true
      volumes:
      - name: proc
        hostPath:
          path: /proc
```

**DaemonSets are for node-level background services such as monitoring, networking, logging, and security agents.**

---

## 7. Comprehensive Comparison Matrix

| Dimension | ReplicaSet | Deployment | StatefulSet | DaemonSet |
| --- | --- | --- | --- | --- |
| **Primary Focus** | Pod cardinality | Rolling releases & rollbacks | Identity & data persistence | Host-level daemon execution |
| **Pod Naming** | `<rs>-<hash>` | `<dep>-<hash>-<rand>` | `<sts>-<index>` (0,1,2) | `<ds>-<rand>` |
| **Scaling Driver** | Manual / HPA (`replicas`) | Manual / HPA (`replicas`) | Manual / HPA (`replicas`) | Automatic with node additions |
| **Creation Order** | Concurrent / random | Concurrent / random | Ordered (`0 → 1 → 2`) | Concurrent on node discovery |
| **Deletion Order** | Arbitrary / cost-based | Arbitrary / cost-based | Reverse order (`2 → 1 → 0`) | Direct with node decommission |
| **Network Interface** | Standard ClusterIP VIP | Standard ClusterIP VIP | Headless Service (A records) | Often `hostNetwork` or `NodePort` |
| **Storage Pattern** | Ephemeral / shared RWX | Ephemeral / shared RWX | Unique PVC template per pod | Node local (`hostPath`) |
| **Update Strategy** | None (manual kill) | RollingUpdate, Recreate | RollingUpdate, OnDelete | RollingUpdate, OnDelete |
| **Target Workload** | Internal primitive | APIs, microservices, workers | MySQL, Kafka, Cassandra, Elasticsearch | Flannel, Fluent Bit, node-exporter |

---

## 8. Edge Cases, Failure Modes & Gotchas

### Case 1: Node partition and the “at-most-one” semantics

If a worker node drops offline:

- **Deployment Pod:** the control plane waits for the pod-eviction timeout (typically 5 minutes), marks the Pod terminating, and schedules a replacement on a healthy node.
- **StatefulSet Pod:** the control plane does not forcibly delete it immediately, to avoid split-brain.

**Why?** If a disconnected node still runs the database Pod and writes to local or SAN storage while a new Pod with the same ordinal boots elsewhere, it can corrupt data.

**Fix:** Only reschedule after the node is confirmed dead, drained, or the user forces deletion.

```bash
kubectl delete pod db-0 --force --grace-period=0
```

### Case 2: Rolling update partitioning in StatefulSets

StatefulSets support canary-style rollout control with:

```yaml
spec:
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      partition: 2
```

With replicas `app-0` to `app-3`, a partition of `2` updates only `app-3` and `app-2`.

```text
Before:  app-0  app-1  app-2  app-3
Updated: app-0  app-1  [new] [new]
```

This provides a native canary mechanism for stateful distributed systems.

### Case 3: DaemonSet vs Deployment with anti-affinity

A common misconception is to replace a DaemonSet with:

```yaml
podAntiAffinity:
  requiredDuringSchedulingIgnoredDuringExecution:
  - topologyKey: "kubernetes.io/hostname"
```

This does not perform the same job.

**Why not?**

- cluster autoscaling adds nodes without automatically scaling the Deployment
- cordoned or drained nodes reject Deployment Pods, but DaemonSets continue running infrastructure services

**DaemonSets are fundamentally node-scoped, not replica-count-based.**

---

## 9. Architectural Decision Tree

```mermaid
flowchart TD
    A{Are you deploying an application container?}
    A -- NO --> B{Is it a host-level service?\n(CNI, monitoring, logging, networking)}
    B -- YES --> C[Use: DaemonSet]
    A -- YES --> D{Does the app require: \n1. Persistent pod network names?\n2. Dedicated per-instance storage?\n3. Strict sequential startup or quorum?}
    D -- YES --> E[Use: StatefulSet]
    D -- NO --> F[Use: Deployment\n(which manages ReplicaSets automatically)]
```

### Decision shortcut

- **Use DaemonSet** when the workload belongs to the node itself
- **Use StatefulSet** when identity and durable state matter
- **Use Deployment** for standard stateless application services

---

## Final Takeaway

The four workload controllers solve different problems:

- **ReplicaSet** = count enforcement
- **Deployment** = release orchestration
- **StatefulSet** = identity + ordering + persistent storage
- **DaemonSet** = infrastructure on every selected node

Understanding these differences is the foundation of good Kubernetes architecture.

If you are building stateful services like databases, queues, or clustered systems, **StatefulSet** is often the right primitive. If you are deploying normal app services, **Deployment** is usually the default choice. If the workload is node-scoped infrastructure, **DaemonSet** is the correct answer.

---

## Executive summary in one line

<strong>ReplicaSets count Pods, Deployments roll out versions, StatefulSets preserve identity and state, and DaemonSets enforce node-level presence.</strong>

