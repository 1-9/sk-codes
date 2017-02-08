print('greater' if 8 > 5 else 'lesser')
print('greater' if 8 > 9 else 'lesser')


def generate_numbers(num):
    i = 0
    while i < num:
        i += 1
        yield i


for num in generate_numbers(11):
    print(num)
