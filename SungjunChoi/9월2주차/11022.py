import sys
n=int(input())
for i in range(1, n+1):
 s=sys.stdin.readline().rstrip().split(' ')
 print(f"Case #{i}: {s[0]} + {s[1]} = {int(s[0])+int(s[1])}")
