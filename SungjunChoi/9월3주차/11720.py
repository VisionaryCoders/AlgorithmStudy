# 입력된 문자열에서 숫자 하나씩 뽑아서 int 함수로 정수로 바꿔 모두 더하면 된다.
n=int(input())
s=input()
result=0
for i in s:
 result+=int(i)
print(result)
