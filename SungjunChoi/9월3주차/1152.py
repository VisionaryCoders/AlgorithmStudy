s=bytearray(input(), "ascii")
if s[0]==32: del s[0]
l=len(s)
if l>0 and s[l-1]==32: del s[l-1]
s=str(s, "ascii")
print(len(s.split(' ')))
