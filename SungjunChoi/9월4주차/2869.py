s=input().split(' ')
a=int(s[0])
b=int(s[1])
v=int(s[2])
if v<=a: result=1
else:
 d=(v-a)//(a-b)
 if (v-a)%(a-b)>0: d+=1
 result=d+1
print(result)
