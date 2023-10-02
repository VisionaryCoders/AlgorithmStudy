from math import *
def isprime(n):
 if n==1: return False
 if n==2: return True
 if n%2==0: return False
 for i in range(2, ceil(sqrt(n))+1):
  if n%i==0: return False
 return True

n=int(input())
s=input().split(' ')
for i in range(len(s)): s[i]=int(s[i])
result=0
for i in s:
 if isprime(i): result+=1
print(result)
