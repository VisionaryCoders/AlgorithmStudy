def dist(a, b):
 return abs(a[0]-b[0])+abs(a[1]-b[1])

def get_dtable(c):
 houses=[]
 chouses=[]
 for i in range(len(c)):
  for j in range(len(c[i])):
   if c[i][j]==1: houses.append((i, j))
   elif c[i][j]==2: chouses.append((i, j))
 result=[]
 for h in houses:
  t=[]
  for ch in chouses:
   t.append(dist(h, ch))
  result.append(t)
 return result

s=input()
n, m = int(s.split()[0]), int(s.split()[1])
l=[]
for i in range(n):
 l.append(input().split(' '))
for i in l:
 for j in range(len(i)):
  i[j]=int(i[j])
distances=get_dtable(l)
p=[[] for i in range(len(distances))]
for h in distances:
 mm, pmm=min(h), 10000000
 while mm<=pmm:
  i=h.index(mm)
  p[i].append(mm)
  h[i]=10000000
  pmm=mm
  mm=min(h)

p.sort(key=lambda x: len(x), reverse=True)
result=[]
for i in p:
 result.append(sum(i))
print(sum(result[0:m-1]))
