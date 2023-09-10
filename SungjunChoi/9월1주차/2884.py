tm=input().split(' ')
h=int(tm[0])
m=int(tm[1])
if h==0: h=24
t=h*60+m-45
print(str(t//60)+' '+str(t%60))