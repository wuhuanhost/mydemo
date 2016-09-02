
#创建导航
require 'json'

#index	自己的序号
#id     父级的序号
#title
#link
@dir=File.dirname(__FILE__)+"\\.."
@sourceName=@dir+'\txt\nav.txt'
@outName='nav'
@outpath=@dir+"\\js\\"
@format='js'
@data=[]
@js=%Q{function makeNav(){d=new dTree('d');var ddd=@nav@;for(var i=0;i<ddd.length;i++){d.add(ddd[i].index,ddd[i].id,ddd[i].title,ddd[i].link)};document.write(d)}}

def fenxiProcess

	level0=-1
	level1=-1
	level2=-1
	level3=-1
	level4=-1
	level5=-1
	level6=-1
	index=0
	list=[]

	f=File.open(@sourceName,"r:utf-8")
	f.each_line do |line|
		line=line.gsub(/\ufeff/,'')
		line=line.strip
	    
	    if(line.match(/^######/))   #六级
	        txtArr=line.gsub!(/#/,"").split(/[\s]{1,2}/)
			url=txtArr[txtArr.length-1]
			txtArr.pop
			title=txtArr.join(" ")

	        list.push({:index=>index,:id=>level5.to_i,:title=>title,:link=>url,:level=>6})
	        level6=index
	        index+=1
	    elsif(line.match(/^#####/)) #五级
	        txtArr=line.gsub!(/#/,"").split(/[\s]{1,2}/)
			url=txtArr[txtArr.length-1]
			txtArr.pop
			title=txtArr.join(" ")
	        list.push({:index=>index,:id=>level4.to_i,:title=>title,:link=>url,:level=>5})
	        level5=index
	        index+=1
	    elsif(line.match(/^####/))  #四级
	        txtArr=line.gsub!(/#/,"").split(/[\s]{1,2}/)
			url=txtArr[txtArr.length-1]
			txtArr.pop
			title=txtArr.join(" ")
	        list.push({:index=>index,:id=>level3.to_i,:title=>title,:link=>url,:level=>4})
	        level4=index
	        index+=1
	    elsif(line.match(/^###/))   #三级
	        txtArr=line.gsub!(/#/,"").split(/[\s]{1,2}/)
			url=txtArr[txtArr.length-1]
			txtArr.pop
			title=txtArr.join(" ")
	        list.push({:index=>index,:id=>level2.to_i,:title=>title,:link=>url,:level=>3})
	        level3=index
	        index+=1
	    elsif(line.match(/^##/))    #二级
	        txtArr=line.gsub!(/#/,"").split(/[\s]{1,2}/)
			url=txtArr[txtArr.length-1]
			txtArr.pop
			title=txtArr.join(" ")
	        list.push({:index=>index,:id=>level1.to_i,:title=>title,:link=>url,:level=>2})
	        level2=index
	        index+=1
	    elsif(line.match(/^#/))     #一级
	        txtArr=line.gsub!(/#/,"").split(/[\s]{1,2}/)
			url=txtArr[txtArr.length-1]
			txtArr.pop
			title=txtArr.join(" ")
	        list.push({:index=>index,:id=>level0.to_i,:title=>title,:link=>url,:level=>1})
	        level1=index
	        index+=1
	    end
	end
    @data=list
end

def makejson()
	puts @data.to_json
	puts "######"
end


#def makejson()
#	f1=File.new(@outpath+@outName+"_ok.txt", "w")
#	f1.puts @data.to_json
#	f1.close
#	puts '================================================='
#	puts "\n文件保存成功！"
#	puts @outpath+@outName+"_ok.txt"
#	puts "\n"
#	puts '================================================='
#end

def makejs()
	f1=File.new(@outpath+@outName+".js", "w")
	f1.puts @js.gsub!(/@nav@/,@data.to_json)
	f1.close
	puts '================================================='
	puts "\n文件保存成功！"
	puts @outpath+@outName+".js"
	puts "\n"
	puts '================================================='
end

#用法1
# ruby makeNav.rb
# 读取nav.txt 输出nav.js

# 用法2
# ruby makeNav.rb json / js
# 读取nav.txt 输出nav_ok.txt / nav.js

#用法3
# ruby makeNav.rb json/js d:\aaa
# 读取nav.txt 输出d:\aaa\nav_ok.txt /nav.js

if(ARGV.length<3)
	puts "用法：ruby makeNav.rb 输出格式 源文件 目标路径".encode!("GBK")
else

	if ARGV[0]
		@format=ARGV[0].encode('utf-8')
	end

	if ARGV[1]
		@sourceName=ARGV[1].encode('utf-8')
	end

	if ARGV[2]
		@outpath=ARGV[2].encode('utf-8')
		if(@outpath[-1]!="\\")
			@outpath+="\\"
		end
	end

	fenxiProcess

	if @format=='json'
		makejson
	elsif @format=='js'
		makejs
	else
		raise '无法识别的文件格式'.encode!("GBK")
	end
end