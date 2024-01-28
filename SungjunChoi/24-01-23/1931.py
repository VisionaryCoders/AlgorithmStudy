n=int(input())
l=[]
for i in range(n):
 s=input()
 l.append((int(s.split(' ') [0]), int(s.split(' ') [1])))
l.sort(key=lambda x: (x[1], x[0]))
result=0
end=0
for i in l:
 if end<=i[0]:
  end=i[1]
  result+=1
print(result)