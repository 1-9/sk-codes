print('greater' if 8 > 5 else 'lesser')
print('greater' if 8 > 9 else 'lesser')


def generate_numbers(num):
    num += 1
    yield num


for num in range(0, 10):
    print(generate_numbers(num))
