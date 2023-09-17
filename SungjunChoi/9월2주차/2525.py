s=input().split(' ')
a=int(s[0])
b=int(s[1])
m=int(input())
t=a*60+b+m
hour=t//60
if hour >= 24: hour%=24
minute=t%60
print(str(hour)+" "+str(minute))
