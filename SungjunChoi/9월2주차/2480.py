s=input().split(" ")
result=0
a=int(s[0])
b=int(s[1])
c=int(s[2])
if a==b and a==c: result=10000+a*1000
elif a==b or a==c: result=1000+a*100
elif b==c: result=1000+b*100
else: result=max([a, b, c])*100
print(result)
