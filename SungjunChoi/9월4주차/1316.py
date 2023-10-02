# 각 알파벳의 개수를 a부터 z까지 리스트로 만들어 분류하고 중복되는 알파벳에 대해 연속되는지 판별한다.

def isgroup(s):
 l=[]
 for i in range(26): l.append([])
 for k, v in enumerate(s):
  l[ord(v)-97].append(k)
 for i in l:
  length=len(i)
  if length>1 and (i[length-1]-i[0])+1!=length: return False
 return True

n=int(input())
result=0
for i in range(n):
 w=input()
 if isgroup(w): result+=1
print(result)
