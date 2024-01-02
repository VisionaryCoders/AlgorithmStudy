from math import *
def isprime(n):
 if n==2: return True
 if n==1 or n%2==0: return False
 for i in range(2, ceil(sqrt(n))+1):
  if n%i==0: return False
 return True

m=int(input())
n=int(input())
l=[]
for i in range(m, n+1):
 if isprime(i): l.append(i)
if len(l)<=0: print(-1)
else:
 result=0
 for i in l: result+=i
 print(result)
 print(l[0])
