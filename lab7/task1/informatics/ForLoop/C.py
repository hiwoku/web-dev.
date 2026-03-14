a = int(input())
b = int(input())

for i in range(1, int(b**0.5) + 1):
    if i * i >= a:
        print(i * i, end=" ")