import sys
while True:
 s=sys.stdin.readline().rstrip().split(' ')
 if int(s[0])==0 and int(s[1])==0: break
 print(int(s[0])+int(s[1]))
