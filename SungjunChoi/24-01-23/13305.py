n=int(input())
r=[]
s=input()
t=s.split()
r.append(0)
for i in t: r.append(int(i))
p=[]
s=input()
t=s.split()
for i in t: p.append(int(i))
l=[]
k=[]
last=p[0]
result=0
for i in range(len(p)):
 if p[i]<=last:
  l.append(i)
  last=p[i]
last=0
for i in r:
 k.append(last+i)
 last+=i
last=0
for i in range(len(l)-1):
 t=l[i]
 t2=l[i+1]
 result+=(k[t2]-last)*p[t]
 last=k[t2]
if last<k[len(k)-1]: result+=(k[len(k)-1]-last)*p[len(l)-1]
print(result)
