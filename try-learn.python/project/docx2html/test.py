# -*- coding:utf-8 -*-
import re
def f(x):
	if x>=6:
		return 0;
	return x * x

r = map(f, [1, 2, 3, 4, 5, 6, 7, 8, 9])
print type(r)
l=list(r)
print r
print l

#m=input("birthday:")
#print m






def abcd(m):
	print m.group()
	print "先进入的方法"
	return "111111111111111"

abc="<img src='dasdadsa.jpg'/>12312312"
match_number=re.compile(r'<img.*?/>')
dadasdasd=match_number.sub(abcd,abc)
print "--------------------"
print dadasdasd

