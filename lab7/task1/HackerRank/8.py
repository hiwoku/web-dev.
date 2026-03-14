n = int(input())
a = list(map(int, input().split()))

a = list(set(a))
a.remove(max(a))

print(max(a))