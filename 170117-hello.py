from functools import reduce
list = [1, 2, 30]
print(reduce(lambda x, y: x + y, list))

print('hello world')


def hello(message):
    print(message)


hello('havish')
