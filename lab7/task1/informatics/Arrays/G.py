n = int(input())
a = list(map(int, input().split()))

i = 0
j = n - 1

while i < j:
    a[i], a[j] = a[j], a[i]
    i += 1
    j -= 1

for x in a:
    print(x, end=" ")