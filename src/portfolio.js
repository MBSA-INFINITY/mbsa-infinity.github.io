/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: '"Hello World!"',
  title2: "MBSA",
  logo_name: "< MBSA />",
  nickname: "mbsaiaditya / MBSA",
  full_name: "M.B.SAI ADITYA",
  subTitle:
    "A Software Engineer with ∞ curiosity and love for Tech. Never Stop Developing.",
  resumeLink:
    "https://drive.google.com/file/d/1FyAqYJOzhl-r0KAikUnMICO_NxcYwebU/view?usp=share_link",
  mail: "mailto:mbsaiaditya@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/MBSA-INFINITY",
  linkedin: "https://www.linkedin.com/in/mbsaiaditya/",
  gmail: "mbsaiaditya@gmail.com",
  gitlab: " ",
  facebook: "https://www.facebook.com/saiaditya.mantrarathnam/",
  instagram: "https://www.instagram.com/mbsaiaditya/",
  twitter: "https://twitter.com/mbsaiaditya",
};

const skills = {
  data: [
    {
      title: "Backend & Microservices Architecture",
      fileName: "FullStackImg",
      skills: [
        "⚡ Architecting scalable microservices using Python (FastAPI/Flask), Go, and Node.js.",
        "⚡ Designing secure Authentication workflows with Okta's Auth0, Azure Identity, and AWS Cognito.",
        "⚡ Engineering distributed systems with high-throughput messaging like Kafka and NATS Jetstream.",
        "⚡ Implementing robust REST and GraphQL APIs for enterprise-grade mobile and web platforms.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: { color: "#00ADD8" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs-icon",
          style: { color: "#339933" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "devicon:fastapi",
          style: { color: "#05998b" },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "devicon:flask",
          style: { color: "#000000" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "devicon:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "skill-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Redis/Valkey",
          fontAwesomeClassname: "devicon:redis",
          style: { color: "#DC382D" },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "logos:graphql",
          style: { color: "#DC382D" },
        },
      ],
    },
    {
      title: "Cloud, DevOps & Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ AWS Certified Developer specializing in RDS, Aurora, DynamoDB, and S3.",
        "⚡ Managing containerized workloads on Kubernetes and Red Hat's OKD platforms.",
        "⚡ Orchestrating CI/CD pipelines using Harness and Jenkins for multi-region deployments.",
        "⚡ Setting up full-stack observability with Datadog Synthetic monitoring and Gravitee APIM.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "material-icon-theme:gcp",
          style: { color: "#4285F4" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "skill-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "skill-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Podman",
          fontAwesomeClassname: "devicon:podman",
          style: { color: "#892CA0" },
        },
        {
          skillName: "Harness",
          fontAwesomeClassname: "logos:harness-icon",
          style: { color: "#00ADEF" },
        },
        {
          skillName: "Datadog",
          fontAwesomeClassname: "devicon:datadog",
          style: { color: "#632CA6" },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "devicon:jenkins",
          style: { color: "#D24939" },
        },
        {
          skillName: "Red Hat OKD",
          fontAwesomeClassname: "logos:redhat-icon",
          style: { color: "#EE0000" },
        },
      ],
    },
    {
      title: "GenAI & Messaging Systems",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Integrating Generative AI via OpenAI, Stable Diffusion, and Midjourney APIs.",
        "⚡ Handling high-frequency live traffic and synchronization for 150+ HORECA locations.",
        "⚡ Managing large-scale data sync between regional S3 buckets and MongoDB clusters.",
      ],
      softwareSkills: [
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: { color: "#412991" },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "skill-icons:kafka",
          style: { color: "#231F20" },
        },
        {
          skillName: "NATS",
          fontAwesomeClassname: "devicon:nats",
          style: { color: "#27AAE1" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "devicon:firebase",
          style: { color: "#FFCA28" },
        },
        {
          skillName: "S3",
          fontAwesomeClassname: "logos:aws-s3",
          style: { color: "#E10098" },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Institute of Technology Karnataka",
      subtitle:
        "Bachelors of Technology (Minors in Information Technology, Majors in Mechanical)",
      logo_path: "nitk.png",
      alt_name: "DAL",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Minors in Information Technology",
        "⚡ Majors in Mechanical Engineering",
        "⚡ Courses: MERN Stack, DBMS, Prallel Computing",
      ],
      website_link: "https://nitk.ac.in/",
    },
    {
      title: "St.Xaviers High School, Bilaspur, Chhattisgarh",
      subtitle: "Senior Secondary Education",
      logo_path: "school.png",
      alt_name: "SETI",
      duration: "2008 - 2020",
      descriptions: [
        "⚡ Completed Class 10th and Class 12th (in Mathematics)",
        "⚡ Grade: CBSE XII - 95.2% , CBSE X - 92.8%",
      ],
      website_link: "https://stxaviersbilaspur.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "A Tree on my name",
      subtitle: "Tree Nation",
      logo_path: "tree_nation.png",
      certificate_link: "https://tree-nation.com/certificate/652d31a585c94",
      alt_name: "HACKFEST",
      color_code: "#fff475",
    },
    {
      title: "Hacktoberfest 2023",
      subtitle: "Hacktober - Holopin - Tree Nation",
      logo_path: "hacktoberfest.svg",
      certificate_link:
        "https://www.holopin.io/hacktoberfest2023/userbadge/cloffy8fv07600fmotjewsakj",
      alt_name: "HACKFEST",
      color_code: "#C5E2EE",
    },
    {
      title: "1st Position at HACKFEST 2023",
      subtitle: "Synergia Labs",
      logo_path: "hackfest2023.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1qftP_KBfq0iCUUcLuXVZppvm7PRY_Z3Y/view",
      alt_name: "HACKFEST",
      color_code: "#F6B808",
    },
    {
      title: "1st Position at TECH THRIVE",
      subtitle:
        "Institute of Technology Guru Ghasidas Viswavidyalaya, Bilaspur (C.G.)",
      logo_path: "tech_thrive.png",
      certificate_link:
        "https://drive.google.com/file/d/16uQCe0PS9p3xsEm01QK3eEBTJS3cWFdM/view",
      alt_name: "TECH THRIVE",
      color_code: "#ffc475",
    },
    {
      title: "2nd Position at HACTRIX1.0",
      subtitle: "Sri Krishna College of Technology, Coimbatore",
      logo_path: "hactrix1.0.webp",
      certificate_link:
        "https://drive.google.com/file/d/16uQCe0PS9p3xsEm01QK3eEBTJS3cWFdM/view",
      alt_name: "HACTRIX1",
      color_code: "#ffbfae",
    },
    {
      title: "3rd Position at Engineer Hackathon",
      subtitle: "Computer Science Committe, NITK",
      logo_path: "engineer_nitk.png",
      certificate_link:
        "https://drive.google.com/file/d/1322wgFlhIc4tqBxdMhPFTUloSlTQA6al/view",
      alt_name: "Engineer Hackathon",
      color_code: "#b190b0",
    },
    // {
    //   title: "Deep Learning Specialization",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Sequence Models",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#F6B808",
    // },
    // {
    //   title: "Convolutional Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Structuring Machine Learning Projects",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "Machine Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Neural Networks and Deep Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
    //   alt_name: "Google",
    //   color_code: "#7A7A7A",
    // },
    // {
    //   title: "Improving Deep Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Android Developer Nanodegree",
    //   subtitle: "Part of Google India Scholarship Program",
    //   logo_path: "100.png",
    //   certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
    //   alt_name: "Google",
    //   color_code: "#C5E2EE",
    // },
    // {
    //   title: "InOut 4.0 Winner #2",
    //   subtitle: "2017",
    //   logo_path: "ino.png",
    //   certificate_link: " ",
    //   alt_name: "InOut",
    //   color_code: "#fffbf3",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Full Time & Internships",
      experiences: [
        {
          title: "Software Engineer",
          company: "Verint CES India Pvt Ltd.",
          company_url: "https://verint.com/",
          logo_path: "verint_logo.png",
          duration: "Jun 2024 - Present",
          location: "Bengaluru, India",
          description:
            "Led the end-to-end migration of Azure Identity V1 to Auth0 for WorkAssist microservices, reducing authorization costs by 50%. Orchestrated the production migration of UI-Shell Widgets Registry to the HYDRA (OKD) platform, managing 1500+ widgets and multi-region microservice deployments via Harness CI/CD and AWS RDS.",
          color: "#00a982", // Verint brand green
        },
        {
          title: "Backend Developer Intern",
          company: "Greyfeathers Pvt Ltd",
          company_url: "https://greyfeathers.in/",
          logo_path: "greyfeathers.jfif",
          duration: "Feb 2023 - Oct 2023",
          location: "Remote - India",
          description:
            "Developed backend services for 'thebeautifulmenu,' handling live traffic for 150+ cafes. Integrated Generative AI capabilities using Stable Diffusion and OpenAI APIs to automate content generation. Engineered secure multi-channel payment workflows by integrating Razorpay, Stripe, and PayPal gateways.",
          color: "#ee3c26",
        },
        {
          title: "Summer Research Intern",
          company:
            "Department of Mathematical and Computational Sciences, NITK",
          company_url: "https://sugarlabs.org/",
          logo_path: "nitk.png",
          duration: "May 2022 - Jul 2022",
          location: "Mangaluru, Karnataka",
          description:
            "Revamped the Product/Movie Review System with Sarcastic Comments/Reviews segregator & Researched on Sentiment Analysis, Word Embedddings (GloVe, Word2Vec)",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Leadership & Club Positions",
      experiences: [
        {
          title: "Webmaster",
          company: "The Institute of Engineering and Technology (IET), NITK",
          company_url: "https://iet.nitk.ac.in/",
          logo_path: "iet.jfif",
          duration: "Apr 2022 - Apr 2024",
          location: "Mangaluru, Karnataka",
          description:
            "Spearheaded the technical roadmap and maintenance of the Gatsby-based official website. Developed and integrated custom internal tools like CEMS (Club Event Management System) and Workboard to automate event coordination and member tracking.",
          color: "#005596", // Official IET Blue
        },
        {
          title: "Webmaster (Media Team)",
          company: "BAJA NITK",
          company_url: "https://iet.nitk.ac.in/", // Consider checking if BAJA has a specific URL
          logo_path: "baja.png",
          duration: "Dec 2022 - Apr 2024",
          location: "Mangaluru, Karnataka",
          description:
            "Directed the end-to-end redesign of the club's web presence, focusing on a modern UI/UX overhaul. Engineered dynamic features including a comprehensive Alumni portal and an interactive media gallery to showcase competitive racing achievements.",
          color: "#E53935",
        },
      ],
    },
    {
      title: "Freelancing & Contract Work",
      experiences: [
        {
          title: "Full-Stack Web Developer (Contract)",
          company: "Noshkain Foods International Pvt Ltd.",
          company_url: "https://noshkaininternational.com/",
          logo_path: "noshkain_logo.png",
          duration: "Dec 2023 - Jan 2024", // Adjust dates as per your actual timeline
          location: "Remote",
          description:
            "Spearheaded the end-to-end architectural design and development of the global corporate platform. Engineered a high-performance frontend with advanced SEO instrumentation, resulting in enhanced global search visibility and sub-second page load times for an international audience.",
          color: "#2E7D32",
        },
        {
          title: "Web Developer & Designer",
          company: "Digitalstep360",
          company_url: "https://www.digitalstep360.com/",
          logo_path: "digitalstep360.jfif",
          duration: "Jun 2021 - Aug 2021",
          location: "Remote",
          description:
            "Architected high-performance, SEO-optimized lead generation websites for real estate clients. Focused on delivering aesthetic UI designs coupled with functionally robust backends to maximize user conversion rates and search rankings.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mbsa.png",
    description:
      "You can contact me at the places mentioned below. I am open to collaborate on projects that can impact. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
    link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Sangyan (Government Project)",
      url: "http://sangyan.co.in/",
      description:
        "Automated the case diaries system for the Telecomm Department, High Court, Government of Chhattisgarh and helped in reducing manpower.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
      ],
    },
    {
      name: "Sarcasm Detection using Recurrent Neural Networks",
      url:
        "https://drive.google.com/file/d/1WOdXxU5wplpz0395qY3foNyJxSCTIfQa/view?usp=share_link",
      description:
        "Revamped the Product/Movie Review System with Sarcastic Comments/Reviews segregator & Researched on Sentiment Analysis, Word Embedddings (GloVe, Word2Vec)",
      languages: [
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Keras",
          iconifyClass: "simple-icons:keras",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Virtual Question Bank",
      url: "https://github/com/saiadityamb/mini_client",
      description:
        "Developed a system for heirarchical and categorical storage of Questions in the database with category creations and specific media storage.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Whatsapp Chat Analysis(EDA)",
      url: "https://github.com/MBSA-INFINITY/Whatsapp-Chat-Analysis-EDA",
      description:
        "Developed a system for heirarchical and categorical storage of Questions in the database with category creations and specific media storage.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Chat App (IT Minor Project)",
      url:
        "https://drive.google.com/file/d/1WOdXxU5wplpz0395qY3foNyJxSCTIfQa/view?usp=share_link",
      description:
        "Developed a chat app that can forward media/text in the exact sequence it was selected in, unlike Whatsapp. {Array of Dictionaries}",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Handwritten Equation Solver",
      url: "https://github.com/IET-NITK/HandwrittenEquationSolver",
      description:
        "Collaborated and Created a Deep CNN for detecting handwritten equation and then solved it using custom scripts.( Validation Accuracy of 95.4 %)",
      languages: [
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Keras",
          iconifyClass: "simple-icons:keras",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
