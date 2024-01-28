s=input()
n=int(s.split(' ') [0])
m=int(s.split(' ') [1])
l1=[]
l6=[]
for i in range(m):
 s=input()
 l6.append(int(s.split(' ') [0]))
 l1.append(int(s.split(' ') [1]))
for i in l1:
 l6.append(i*6)
l1.sort()
l6.sort()
a=n//6
b=n%6
result=min(a*l6[0]+b*l1[0], (a+1)*l6[0])
print(result)
