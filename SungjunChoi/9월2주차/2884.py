tm=input().split(' ')
h=int(tm[0])
m=int(tm[1])
if h==0: h=24
t=h*60+m-45
hour=t//60
minute=t%60
if hour >= 24: hour%=24
print(str(hour)+" "+str(minute))
