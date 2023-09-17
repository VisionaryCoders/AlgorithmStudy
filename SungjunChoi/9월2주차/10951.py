import sys
while True:
 s=sys.stdin.readline().rstrip()
 if s == "": break
 s=s.split(' ')
 print(int(s[0])+int(s[1]))