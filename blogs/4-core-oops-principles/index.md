# 4 Basic Object Oriented Programming (OOPs) Principles

[<img align="center" height="250" width="250" alt="KPN" src="./images/oops.avif"/>]()


### The 4 core OOPs Principles are as follow :- 
<details open>
<summary><b>ENCAPSULATION</b> </summary>

## ENCAPSULATION

**Encapsulation** is the way to limit the direct access of some crucial `Class` data/variables by the Instantited Objects. This basically means that the, a programmer can control which variables/methods to expose to the objects which are created from a specific class. In this way, we can control the access of confidential data to the `Objects` created. 

Lets consider the below example which is in **Python** :-

```python
class Item:
    def __init__(self):
        self.name = "saiaditya"
        self.age = 20
Object1 = Item() 
print(Object1.name) 
print(Object1.age)
```
Here, we created a class called `Item` and created a contructore which initializes two vraibles `name` and `age`. Then we created an obect of that Class and tried to access the variables. Following is the result.

```console
saiaditya
20
```

No wonder, we can acess those variables from Object. Now consider the following code and result:-

```python
class Item:
    def __init__(self):
        self.name = "saiaditya"
        self.__name  = "mbsa"
        self.age = 20 

Object1 = Item()
print(Object1.name)
print(Object1.age)
print(Object1.__name)
```

```console
saiaditya
20
Traceback (most recent call last):
  File "d:/All Projects/Personal Website/blogs/blogs/mbsa/mbsa.py", line 10, in <module>
    print(Object1.__name)
AttributeError: 'Item' object has no attribute '__name'
```

Check it out! Though we defined `__name` variable, we were not able to access it, when we created the object of that class. This is the pythonic way of declaring varibales as `private`. So all the variables/methods starting with **double underscore** `__` are private in nature and cannot be accessed by instantiated objects.
</details>

<details>
<summary><b>ABSTRACTION</b> </summary>

## ABSTRACTION

**ABSTRACTION**, as the word suggests, is to do or use something without knowing how it excatly works under the hood. Same goes with OOPs as well. When we use class methods without knowing about its actual implementation inside the class, that is called `Abstraction`. Let's consider the following example :- 

```python
class Item:
    def __price_a(self):
        return 1
    def __price_b(self):
        return 2
    def __price_c(self):
        return 3
    def total_price(self):
        price_a = self.__price_a()
        price_b = self.__price_b()
        price_c = self.__price_c()
        return price_a + price_b + price_c
Object1 = Item()
print(Object1.total_price())
```

and the obvious result is 

```console
6
```

When you say `Object1.total_price()`, you just say that I want the total price without even knowing that total price is the sum of three items `a, b, c`. This is what **abstraction** means!
</details>

<details>
<summary><b>INHERITANCE</b> </summary>

## INHERITANCE

*We inherit the genes from out parents*. Similarly, A particular `Class` can inherit all the public/protected properties of a parent class. This is called **Inheritance** in OOPs. Lets consider the following Example :- 


```python 
class Item:
    def __init__(self):
        self.default_price = 20
    def total_discount(self): 
        return 50
    
class Television (Item): 
    pass
Object1 = Television()
print(Object1.default_price)
print(Object1.total_discount())
```

*Result*

```console
20
50

```

Here, we see that there is a parent class `Item` and a child class `Television` which inherit from Item. We have not defined anything inside the **Television** class, yet we can access variable `default_price` and `total_discount` method. This is because, **Television** inherited all those properties and methods from the **Item** Class.

For Further details of Inheritance, Refer thefollowing Link :- 
[Single and Multiple Inheritance in Python](https://www.geeksforgeeks.org/types-of-inheritance-python/)
</details>

<details>
<summary><b>POLYMORPHISM</b> </summary>

## POLYMORPHISM

**POLYMORPHISM** is a two word combination. **Poly** means *many* and **Morph** means *Forms*. In OOP, polymorphism come into play when we use same function/methods/objects to process more than one type of data. Take a look at following example :- 

```python
string = "saiaditya"
lst = [10,20,30]

print(len(string)) 
print(len(lst))
```

Here we see that the `len()` fucntion is used to calculate the function of both the datatypes `string` and `list`.Following is the result without any error. That means, `len` is optmized to work with both the form of data. 

```console
9
3
```

For Advanced concepts in ploymorphism, like `Function Overloading`, `Operator Overloading` and `Function Overriding` refer the following link :- [GeeksforGeeks](https://www.geeksforgeeks.org/perl-polymorphism-in-oops/)

</details>

