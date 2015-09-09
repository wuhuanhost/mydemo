# -*- coding: utf-8 -*-
import re

line="qwepythonsdsadasapython"

m1=re.search(r'python', line)
m2=re.match(r'python',line)
m3=re.findall(r'python',line)

print m1.group()#匹配到python
#print m2.group()#匹配不到，报错
print m3 #匹配到两个

#【search】、【match】、【findall】的区别
## match要求字符串的第一个字符就能匹配上正则表达式，即从字符串的开头开始匹配，匹配到一个就停止
## search从任意位置开始匹配，匹配到一个就停止
## findall匹配所有的符合条件的字符串,返回一个数组




helloCallBack
