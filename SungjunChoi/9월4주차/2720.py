num=int(input())
for i in range(num):
 q=d=n=p=0
 a=int(input())
 q=a//25
 a-=q*25
 d=a//10
 a-=d*10
 n=a//5
 a-=n*5
 p=a
 print(f"{q} {d} {n} {p}")
