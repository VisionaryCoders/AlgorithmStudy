import sys
n=int(input())
crains=input().split(' ')
n=int(input())
boxes=input().split(' ')
for i in range(len(crains)): crains[i]=int(crains[i])
for i in range(len(boxes)): boxes[i]=int(boxes[i])
crains.sort(reverse=True)
boxes.sort(reverse=True)
result=0
if crains[0]<boxes[0]:
 result=-1
 print(result)
 exit()
while boxes:
 for c in crains:
  for b in boxes:
   if b<=c:
    boxes.remove(b)
   break
 result+=1
print(result)
