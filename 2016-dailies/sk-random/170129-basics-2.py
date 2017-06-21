def add(num):
    num = 2
    print(num)

    def innerAdd(num1):
        nonlocal num
        print(num)
        num = 8
        return num + num1

    print(num)
    return innerAdd


test1 = add(9)
print(test1(9))


def outer():
    x = 1
    print('outer before:', x)

    def inner():
        nonlocal x
        x = 2
        print("inner:", x)

    inner()
    print("outer after:", x)


outer()


def generate_sequence(num):
    num = num**2
    yield num


for x in range(1, 7):
    print(next(generate_sequence(x)))
