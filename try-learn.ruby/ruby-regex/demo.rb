# encoding: utf-8

# demo1
str="dasdpythondasdsPython"
puts str.scan(/[pP]ython/)#查询python和Python
puts str.sub(/[pP]ython/,"@@@")#替换第一次匹配到的python为@@@
puts str.gsub(/[pP]ython/,"@@@")#查询python和Python并且将它们替换为@@@
##【scan】查找方法
##【gsub!】查找并且替换
##【gsub/sub】会返回一个新的字符串
##【gsub!/sub!】会修改被调用的字符串

#demo2
str1='<img src="test1.jpg" width="60px" height="80px"/><img src="test2.jpg" width="60px" height="80px"/>'
puts str1.scan(/src=".*"/)#匹配【src="test1.jpg" width="60px" height="80px"/><img src="test2.jpg" width="60px" height="80px"】
puts str1.scan(/src=".*?"/)#匹配图片的src属性及其值【？】是惰性匹配，匹配到就结束
#【.*】表示匹配任意的非换行字符0到多次

#demo3
puts "[ qwe  dasd ]".gsub!(/\[([^\[\]]*?)\]/) {|s| s.gsub(/ /,"@@@")}
#替换中括号中的空格为@

#demo4
puts "-----------------------------------------------------------------"
test="<u>　　　　　　</u>"
puts  test.scan(/<u>[　]{0,200}<\/u>/)#匹配<u>和</u>标签中带有0，200个空格

