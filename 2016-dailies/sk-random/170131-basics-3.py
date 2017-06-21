# class Animal:
#     def __init__(self, name):
#         "docstring"
#         self.name = name

#     def hello(self):
#         return self.name

# Dog = Animal('Puppy')
# print(Dog.hello())

# if True:
#     print('hello')

# def hello_world():
#     print('hello world')

# hello_world()

# boy = {'b': 'boy'}
# print(boy['b'])

# days = ('wednesday', 'thursday')
# print(days[1])

# abc = [1, 2, 3]
# print(abc[0])

# class Car:
#     def __init__(self, company):
#         "initialilizes company"
#         self.company = company

#     def drive_car(self):
#         print('driving car')

# class Benz(Car):
#     def __init__(self, company):
#         "docstring"
#         Car.__init__(Benz, company)

# a = Benz('audi')
# a.drive_car()

hello = 'world'
print(hello)


def add_two_numbers(num1, num2):
    print(num1 + num2)
    return num1 + num2


add_two_numbers(2, 8)

x = 8

if x % 2 == 0:
    print('x is even')
else:
    print('x is odd')


class Dog:
    def __init__(self, name):
        "docstring"
        self.name = name
