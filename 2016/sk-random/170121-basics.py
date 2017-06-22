import sys
print(sys.version)

print('hello world')

a = 'apple'

b = 9

print(a, b)


def main():
    print('main function')
    return 99


main()

print(main())

print(float(3))
print(3 / 2)
print(9**2)
print(9**0.5)

a = 8
print(a)
a += 10
print(a)

h = 'hello world'
print(len(h))
print(h[0])
print(h.upper())
print(list(h))

my_hello = 'hello'
my_list = [1, 2, 3]
print(my_list * 2)
my_list.append(4)
print(my_list)

for var in (1, 2):
    print('yes', var)

i = 0
while (i < 2):
    print('hello')
    i += 1

for var in range(0, 20, 2):
    print(var)

lst = [x**2 for x in range(0, 20, 2)]
print(lst)

for var in range(0, 20, 5):
    print(var)

try:
    print('hello')
except Exception:
    print(Exception)

f = open('testing', 'r+')
f.write('testing new content')
print(f.readline())
print('test')

d = [1, 2, 3, 4, 5]
d.append(6)
print(d)
print(len(d))


def hello(name):
    """
     Hello function
    """
    print('Hello ' + name + '!!!')


hello('Havish')


def is_prime(num):
    for item in range(2, num):
        if num % item == 0:
            print('not prime')
            return False
    print('is prime')
    return True


print(is_prime(5))

l = [1, 2, 3]

square = lambda num: num**2

print(square(9))

adder = lambda num1, num2: num1 + num2
print(adder(9, 9))


class Sample(object):
    species = 'mammal'

    def __init__(self, age, name):
        self.age = age
        self.name = name

    def getName(self):
        return self.name

    pass


x = Sample(name='H', age=2)
print(type(x))
print(x.age)
print(x.name)
print(x.species)
print(x.getName())


class Circle(object):
    pi = 3.14

    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return self.radius**2 * Circle.pi

    def setRadius(self, new_radius):
        self.radius = new_radius


c = Circle(10)
print(c.area())

c.setRadius(20)
print(c.area())

inheritance


class Animal(object):
    def __init__(self):
        pass

    def bark(self):
        return 'from animal'

    def who_am_i(self):
        return 'Animal'


class Dog(Animal):
    def __init__(self):
        Animal.__init__(Dog)

    def who_am_i(self):
        return 'dog'


husky = Dog()
print(husky.bark())
print(husky.who_am_i())

import numpy
from math import sqrt
print(sqrt(9))
print(numpy)

from functools import reduce
a = [10, 2, 3]
b = list(map(lambda x: x**2, a))
c = reduce(lambda x, y: x if (x > y) else y, a)
print(c)
