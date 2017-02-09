from functools import reduce
list = [1, 2, 30]
print(reduce(lambda x, y: x + y, list))

print('hello world')


def hello(message):
    print(message)


hello('havish')

# lists

sports = ['soccer', 'basketball', 'football', 'cricket']

s1 = sports[:]

s1[0] = 'volleyball'
print(s1, sports)

s2 = sports[1:3]
print(s2)

s3 = sports[0]

print(s3)

s3 = 'hockey'

print(s3, sports)

del sports[-1:]
print(sports)

sports.insert(0, 'baseball')
sports.append('racketball')
s4 = sports + ['tennis']
print(sports, s4)

# dictionaries

states = {'ny': 'New York', 'nj': 'New Jersey', 'ca': 'California'}

print(states['ny'])
states.update({'va': 'Virginia'})
print(states)
del states['va']
print(states)

for key, item in states.items():
    print(key, item)


class Animal():
    """docstring for Animal"""

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def getInfo(self):
        return {'name': self.name, 'age': self.age}


dog = Animal('Hulky', 2)

print(dog.getInfo())
