t=int(input())
result=[]
for i in range(t):
 n=int(input())
 l=input().split()
 length=len(l)
 for j in range(length): l[j]=int(l[j])
 l.sort()
 if length%2==0: start=length-2
 else: start=length-1
 result.append(l[start]-l[start-2])
for r in result: print(r)
