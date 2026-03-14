n = int(input())

students = []
scores = []

for _ in range(n):
    name = input()
    grade = float(input())
    students.append([name, grade])
    scores.append(grade)

scores = sorted(set(scores))
second = scores[1]

names = []

for s in students:
    if s[1] == second:
        names.append(s[0])

names.sort()

for name in names:
    print(name)