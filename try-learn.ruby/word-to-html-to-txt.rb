# encoding: utf-8
##读取文件
def readFile(fileName)
	str="";
	io=File.open(fileName,"r:utf-8");
	io.each_line do |line|
		str+=line;
	end
	return str;	
end

##写入文件
def writeFile(fileName,str)
	aFile = File.new(fileName, "w")
	if aFile
	   aFile.syswrite(str)
	else
	   puts "Unable to open file!"
	end	
end

##word转换为html中的杂乱代码
str=readFile("index.html");
str=str.scan(/<body>[\s\S]*?<\/body>/)[0]##获取body中的内容
str=str.gsub(/<div[\s\S]*?>/,"<div>")##去掉div里面的属性
str=str.gsub(/<span[\s\S]*?>/,"<span>")
str=str.gsub(/<td[\s\S]*?>/,"<td>")
str=str.gsub(/<tr[\s\S]*?>/,"<tr>")
str=str.gsub(/<table[\s\S]*?>/,"<table>")
str.gsub!(/<o:p>/,"")
str.gsub!(/<\/o:p>/,"")
str.gsub!(/<span>/,"")
str.gsub!(/<\/span>/,"")
str.gsub!(/&nbsp;/,"")
str.gsub!(/<p[\s\S]*?>/,"<p>")
str.gsub!(/<span><\/span>/,"")
str.gsub!(/<p><\/p>/,"")
str.gsub!(/<p>/,"")
str.gsub!(/<\/p>/,"<br/>")
str.gsub!(/[\s]<\/td>/,"</td>")

##定义一个html模版
html=%Q{<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	@data@
</body>
</html>}


# puts str.scan(/<body>[\s\S]*?<\/body>/)
 writeFile("inbox.html",html.gsub(/@data@/,str.gsub!(/\s/,"")));

