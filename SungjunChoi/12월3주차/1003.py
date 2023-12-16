def add(l1, l2):
 result=[]
 for i in range(len(l1)):
  result.append(l1[i]+l2[i])
 return result

def fib(n, first_call=True):
 if first_call: fib.count=[]
 if n==0: return [1, 0]
 elif n==1: return [0, 1]
 elif len(fib.count)>n-2: return fib.count[n-2]
 else:
  result=add(fib(n-1, False), fib(n-2, False))
  fib.count.append(result)
  return result

t=int(input())
for i in range(t):
 result=fib(int(input()))
 print(str(result[0])+' '+str(result[1]))
