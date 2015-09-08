# encoding: utf-8

# demo1
str="dasdpythondasdsPython"
###puts str.scan(/[pP]ython/)#查询python和Python
###puts str.sub(/[pP]ython/,"@@@")#替换第一次匹配到的python为@@@
###puts str.gsub(/[pP]ython/,"@@@")#查询python和Python并且将它们替换为@@@
##【scan】查找方法
##【gsub!】查找并且替换
##【gsub/sub】会返回一个新的字符串
##【gsub!/sub!】会修改被调用的字符串

#demo2
str1='<img src="test1.jpg" width="60px" height="80px"/><img src="test2.jpg" width="60px" height="80px"/>'
###puts str1.scan(/src=".*"/)#匹配【src="test1.jpg" width="60px" height="80px"/><img src="test2.jpg" width="60px" height="80px"】
###puts str1.scan(/src=".*?"/)#匹配图片的src属性及其值【？】是惰性匹配，匹配到就结束
#【.*】表示匹配任意的非换行字符0到多次

#demo3
###puts "[ qwe  dasd ]".gsub!(/\[([^\[\]]*?)\]/) {|s| s.gsub(/ /,"@@@")}
#替换中括号中的空格为@

#demo4
###puts "-----------------------------demo4------------------------------------"
test="<u>　　　　　　</u>"
###puts  test.scan(/<u>[　]{0,200}<\/u>/)#匹配<u>和</u>标签中带有0，200个空格



#demo5
###puts "-----------------------------demo5------------------------------------"
test1="qwwe<u><img src='img/10_zzxx.003.jpeg' style='border-bottom:1px solid #000000;padding-bottom:10px;'/></u>eqweqweqw";
###puts test1.scan(/<u><img.*?\/><\/u>/);


#demo6
###puts "-----------------------------demo6------------------------------------"
test2="dadsad123_-*&^%.png";
###puts test2.scan(/.*[(\.jpg)|(\.jpeg)|(\.png)]/);##按照文件名后缀进行查找





puts "-------------------------------------------------------"
test123="img/abcd.jpg{200,300}   img/dasdsa.jpg{400,300}img/dakdkaj.png{600,100}   img/dadadsda.gif   fjksdhfkshdfjkhjkfhkjdhfkjlhkjlh";
a= test123.scan(/(img\/[^\.]+?.(jpg|jpeg|png|gif))|(img\/[^\.]+?.(jpg|jpeg|png|gif)\{[^\}]+?\})/);
p a




