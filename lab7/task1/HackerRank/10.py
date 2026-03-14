n = int(input())

students = {}

for _ in range(n):
    data = input().split()
    name = data[0]
    marks = list(map(float, data[1:]))
    students[name] = marks

query = input()

avg = sum(students[query]) / len(students[query])

print(f"{avg:.2f}")