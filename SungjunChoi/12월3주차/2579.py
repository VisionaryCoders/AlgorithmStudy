def fn(stairs=None, cursor=0, first_call=True):
 if first_call: fn.result=stairs[0]
 if stairs==None: stairs=fn.stairs
 fn.count=len(stairs)-1
 if fn.count<=0: return fn.result
 if fn.count-cursor==2: fn.result+=stairs[cursor+2]
 elif fn.count-cursor==1: fn.result+=stairs[cursor+1]
 else:
  if stairs[cursor+1]>stairs[cursor+2]:
   fn.result+=stairs[cursor+1]
   fn(stairs, cursor+2, False)
  else:
   fn.result+=stairs[cursor+2]
   fn(stairs, cursor+2, False)
 return fn.result

num=int(input())
l=[]
for i in range(num):
 l.append(int(input()))
print(fn(l))
