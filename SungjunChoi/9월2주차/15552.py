import sys
n=int(input())
for i in range(n):
 s=sys.stdin.readline().rstrip().split(' ')
 print(int(s[0])+int(s[1]))
