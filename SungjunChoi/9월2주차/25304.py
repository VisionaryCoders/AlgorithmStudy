total=int(input())
count=int(input())
for i in range(count):
 s=input().split(' ')
 total-=int(s[0])*int(s[1])
if total==0: print("yes")
else: print("no")
