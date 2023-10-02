# -1 26개로 구성된 리스트를 만든다. 초기에는 모든 알파벳이 존재하지 않는다는 의미이다.
# 각각의 알파벳을 찾고 리스트에서 그 알파벳에 해당하는 위치의 값이 -1이면 해당 알파벳의 위치를 넣고 그렇지 않으면 넘어간다.
# 루프 두번으로 끝내기 위해 각 알파벳의 아스키 값에서 97을 뺀 값을 리스트의 인덱스로 사용한다.
# str.find는 쓰지 않는다.

import sys
result=[-1]*26
s=input()
for k, v in enumerate(s):
 if result[ord(v)-97]<0: result[ord(v)-97]=k
for i in range(0, len(result)-1): sys.stdout.write(str(result[i])+' ')
print(str(result[25]))
