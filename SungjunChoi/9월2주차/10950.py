t=int(input())
result=[]
for i in range(t):
 s=input().split(' ')
 result.append(int(s[0])+int(s[1]))
for i in result: print(i)
