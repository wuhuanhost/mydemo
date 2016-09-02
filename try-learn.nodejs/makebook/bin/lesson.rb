# encoding: utf-8

#本脚本用于数学
require 'json'
# require './replacelib'

@platform='pc'      #发布平台  可以是pc tablepad
@mp3path='mp3/'
@imgpath='img/'
@swfpath='swf/'
@sourcePath=''	#完整的源
@sourceName=''		#源文件名称
@outName=''			
@format='json'

@lineFlag='<br/>'		#换行标记
@data={}
@warmCount=0;
@html=%Q{
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/normalize.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/dtree.css" />
    <script type="text/javascript" src="js/dtree.js"></script>
    <script type="text/javascript" src="js/nav.js"></script>
    <title>数学新版</title>
</head>

<body>
    <!--遮罩层 -->
    <div id="task"></div>
    <!-- nav -->
    <div id="nav">
        <!--<p style='text-align: center'><span class='button  button-default'>确定</span></p>
        <p style='text-align: center'><span class='button button-default-showAll'>确定</span></p>
        <p style='text-align: center'><span class='button button-default-hideAll'>确定</span></p>-->
        <div class="dtree" style="overflow-y: auto;margin-top:0px;">
            <p><a href="javascript: d.openAll();">展开全部</a> | <a href="javascript: d.closeAll();">关闭全部</a>
            </p>
            <script type="text/javascript">
            makeNav();
			d.openAll()
            </script>
        </div>
    </div>
    
    <!-- content -->
    <div id="contents">
        <div id="title">
            <div id="title-row"><h1 style="font-family:宋体">@title@</h1></div>
        </div>
        <div id="content">
            
            <!-- 测试 -->
            <div class='block' style='display:none;'>
                <div style='width:100%;background-color: red;'>
                    <div style='width:40px;background-color: green;float:left;'>
                        sd
                    </div>
                    <div style='width:760px;background-color: orange;float:left'></div>
                </div>
            </div>
        </div>
    </div>
    <!-- 内容区 -->
    </div>
    <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="js/re.js"></script>
    <script type="text/javascript" src="js/text.js"></script>
    <script type="text/javascript" src="js/jiaohu.js"></script>
    <script type="text/javascript" src="js/timu.js"></script>
    <script type="text/javascript" src="js/talk.js"></script>
    <script type="text/javascript" src="js/controller.js"></script>
    <script type="text/javascript">
    $(document).ready(function() {

        $("#task").click(function() {

            toggleSlider();

        });

    })

    function toggleSlider() {
        if ($("#nav").css("display") == "block") {
            $("#nav").css("display", "none");
            $("#contents").css("width","100%");
            $("#contents").css("left","0px");
            $("#content").css("margin","0 auto");

        } else {
            $("#nav").css("display", "block");
            $("#contents").css("width","75%");
            $("#contents").css("left","25%");
            $("#content").css("margin-left","50px");
        }
    }
    controller.init(@data@);
    controller.control();
    </script>
</body>

</html>

}

def replaceAll(str)
    replaceImg(str)
    replaceFont(str)
    replaceUnder(str)
    replaceAlign(str)
    replaceSuojin(str)
    str.gsub!(/——/,"──")
    return str
end

def replaceImg(str)
    str.gsub!(/\{\{img ([\S]*?)\}\}/,"<img src=\"img/\\1\" />")
    return str
end

def replaceFont(str)

    # 带有颜色和字号
    #{{font楷体12#ff0000 这是你的格式}}
    if(str.match(/\{\{font([^\d#]{1,7}[1234567890]{2})#[0-9abcdefABCDEF]{6} /))
        # <span style='font-family: "宋体";font-size:12px;color:#xxxx'
        # puts 111111
        str.gsub!(/\{\{font([^\d#]{1,7})([0123456789]{2})#([0-9abcdefABCDEF]{6}) ([\S\s]*?)\}\}/,"<span style=\'font-family:\"\\1\";font-size:\\2px;color:#\\3\'>\\4</span>")
    end
    #只有字号
    # {{font楷体12 这是你的格式}}
    if (str.match(/\{\{font([^\d#]{1,7}[1234567890]{2}) /))
        # puts 22222222
        str.gsub!(/\{\{font([^\d#]{1,7})([0123456789]{2}) ([\S\s]*?)\}\}/,"<span style=\'font-family:\"\\1\";font-size:\\2px;\'>\\3</span>")
    end
    #带有颜色
    # {{font楷体#ff0000 这是你的格式}}
    if(str.match(/\{\{font([^\d#]{1,7})#[0-9abcdefABCDEF]{6} /))
        # puts 333333333
        str.gsub!(/\{\{font([^\d#]{1,7})#([0-9abcdefABCDEF]{6}) ([\S\s]*?)\}\}/,"<span style=\'font-family:\"\\1\";color:#\\2\'>\\3</span>")
    end
    # 只有字体
    # {{font楷体 这是你的格式}}
    if(str.match(/\{\{font([^\d#]{1,7}) /))
        # puts 5555555555
        str.gsub!(/\{\{font([^\d#]{1,7}) ([\S\s]*?)\}\}/,"<span style=\'font-family:\"\\1\"\'>\\2</span>")
    end
    return str
end

def replaceFont2(str)

    # 带有颜色和字号
    #{{font楷体12#ff0000}}
    if(str.match(/\{\{font([\u4e00-\u9fa5]{1,7}[1234567890]{2})#[0-9abcdefABCDEF]{6} /))
        # <span style='font-family: "宋体";font-size:12px;color:#xxxx'
        # puts 111111
        str.gsub!(/\{\{font([\u4e00-\u9fa5]{1,7})([0123456789]{2})#([0-9abcdefABCDEF]{6}) ([\S\s]*?)\}\}/,"<span style=\'font-family:\"\\1\";font-size:\\2px;color:#\\3\'>\\4</span>")
    end
    #只有字号
    # {{font楷体12}}
    if (str.match(/\{\{font([\u4e00-\u9fa5]{1,7}[1234567890]{2}) /))
        # puts 22222222
        str.gsub!(/\{\{font([\u4e00-\u9fa5]{1,7})([0123456789]{2}) ([\S\s]*?)\}\}/,"<span style=\'font-family:\"\\1\";font-size:\\2px;\'>\\3</span>")
    end
    #带有颜色
    # {{font楷体#ff0000}}
    if(str.match(/\{\{font([\u4e00-\u9fa5]{1,7})#[0-9abcdefABCDEF]{6} /))
        # puts 333333333
        str.gsub!(/\{\{font([\u4e00-\u9fa5]{1,7})#([0-9abcdefABCDEF]{6}) ([\S\s]*?)\}\}/,"<span style=\'font-family:\"\\1\";color:#\\2\'>\\3</span>")
    end
    # 只有字体
    # {{font楷体}}
    if(str.match(/\{\{font([\u4e00-\u9fa5]{1,7}) /))
        # puts 5555555555
        str.gsub!(/\{\{font([\u4e00-\u9fa5]{1,7}) ([\S\s]*?)\}\}/,"<span style=\'font-family:\"\\1\"\'>\\2</span>")
    end
    return str
end

# [[居中 xxxx]]
# [[居右 xdfa]]
def replaceAlign(str)
    if(str.match(/\[\[center /))
        # puts "aaaaaaaaaaaaaaaa"
        str.gsub!(/\[\[center ([\S\s]*?)\]\]/,"<span style=\'text-align:center;display:block;\'>\\1</span>")
    elsif(str.match(/\[\[right /))
        # puts "bbbbbbbbbbbbbb"
        str.gsub!(/\[\[right ([\S\s]*?)\]\]/,"<span style=\'text-align:right;display:block;\'>\\1</span>")
    elsif(str.match(/\[\[left /))
        # puts "bbbbbbbbbbbbbb"
        str.gsub!(/\[\[left ([\S\s]*?)\]\]/,"<span style=\'text-align:left;display:block;text-indent:0em;\'>\\1</span>")
    end
    return str
end

#下划线
def replaceUnder(str)
    strArr=str.scan(/\{\{u([0123456789]{1,2})\}\}/)
    strArr.each do |x|
        n=x[0].to_i
        str.sub!("{{u#{n}}}","<u>"+("　"*n)+"</u>")
    end
    return str
end

#缩进
# {{em2 }}
def replaceSuojin(str)
    if(str.match(/\{\{em[\d]{1} /))
        str.gsub!(/\{\{em([\d]) ([\S\s]*?)\}\}/,"<div style=\'margin-left:\\1em;\'>\\2</div>")
    end
    return str
end

def fenxiProcess()
    f=File.open(@sourcePath+@sourceName,'r:utf-8')
    #puts @sourcePath+@sourceName
    @data['title']=''
    @data['list']=[]
    item=nil
    f.each_line do |line|
        # puts line
        line=line.gsub(/\ufeff/,'')
        line=line.strip
        line=line.gsub(/\[\[([ 　]+)\]\]/,"\\1")
        if line!=''
            if(line.match(/^@([^@]+?)@/))
                line=line.gsub("@","")
                if(@data['title']!="")
                    @data['title']+="<br>"+line
                else
                    @data['title']=line
                end
            elsif line.match(/^#text|^#tuwen|^#timu|^#jiaohu|^#talk/)
                if(item)
                    @data['list'].push(item)
                end
                item={'type'=>'','title'=>'','titleImg'=>'','contents'=>[]}
                titleArr=line.split(" ")
                item['type']=titleArr[0].sub(/^#/,'')
                item['type']='text' if item['type']=='tuwen'
                item['title']=titleArr[1] if titleArr[1]
                item['titleImg']=@imgpath+titleArr[2] if titleArr[2]
            elsif line.match(/^#\[button\]/)
                item['button']={"text"=>line.split(" ")[1],"link"=>line.split(" ")[2]}
            elsif line.match(/^###/)
                # puts 'kkk'
                item['title_style']=line.sub(/###/,'')
                # puts 'ppp'
            elsif line.match(/^##/)
                item['style']=line.sub(/##/,'')
            else
                # 解决talk一个人说多行的问题
                if(item['type']=="talk") 
                    #长度必须要大于5个字符
                    if !line.match(/^阅读与理解|^分析与解答|^回顾与反思/)
                        last=item['contents'][-1]
                        
                        #包含了对白
                        if(line.match(/^博士[:：]|^乐乐[:：]|^享享[:：]|^博士说[:：]/))
                            name=line.match(/^博士[:：]|^乐乐[:：]|^享享[:：]|^博士说[:：]/)[0][0..-2]
                            item['contents'].push({"title"=>name,"data"=>[line.sub(/^博士[:：]|^乐乐[:：]|^享享[:：]|^博士说[:：]/,'')]})
                        #没有包含对白
                        else
                            #缓存了上次的对白
                            if(last)
                                if(last.class.to_s=="Hash") #对白内容保存在hash里面
                                    last['data'].push(line)
                                elsif (last.class.to_s=="Array")    #回顾与反思保存在Array里面
                                    last.push(line)
                                else
                                    if(last.match(/^回顾与反思/))
                                        item['contents'].push([line])
                                    else
                                        item['contents'].push(line)
                                    end
                                end
                            #没有缓存到上次的对白
                            else
                                item['contents'].push(line)
                            end
                        end
                    else
                        item['contents'].push(line)
                    end
                elsif(item['type']=='timu')
                    last=item['contents'][-1]
                    if(last)
                        if(last.class.to_s=="Array")
                            if(line.match(/^[\u00a0 　]*?echo[:：]/))
                                last.push(line.sub(/^[\u00a0 　]*?echo[:：]/,""))
                            else
                                item['contents'].push(line)
                            end
                        else
                            if(line.match(/^[\u00a0 　]*?echo[:：]/))
                                item['contents'].push([line.sub(/^[\u00a0 　]*?echo[:：]/,"")])
                            else
                                item['contents'].push(line)
                            end
                        end
                    else
                        item['contents'].push(line)
                    end
                elsif item['type']=='jiaohu'
                    last=item['contents'][-1]
                    # 包含 汉字：的情况
                    if(line.match(/^例\d{1,2}/))
                        item['contents'].push(line)
                    elsif line.match(/^#end$/)
                        item['contents'].push("")
                    elsif(line.match(/^[\u4e00-\u9fa5]{2,5}[:：]/))
                        if(line.match(/^例[:：]|^判断[:：]|^例\d{1,2}/))
                            item['contents'].push(line)
                        else
                            name=line.match(/^[\u4e00-\u9fa5]{2,5}[:：]/)[0][0..-2]
                            if(last.class.to_s=="Hash")
                                if(name=='口答')
                                    last['data'].push(line)
                                elsif(last['title']==name)
                                    last['data'].push(line.sub(/^[\u4e00-\u9fa5]{2,5}[:：]/,""))
                                else
                                    item['contents'].push({"title"=>name,"data"=>[line.sub(/^[\u4e00-\u9fa5]{2,5}[:：]/,"")]})
                                end
                            else
                                item['contents'].push({"title"=>name,"data"=>[line.sub(/^[\u4e00-\u9fa5]{2,5}[:：]/,"")]})
                            end
                        end
                    elsif(line.match(/^解答[ 　]/))
                            name=line.match(/^解答[ 　]/)[0][0..-2]
                            if(last.class.to_s=="Hash")
                                if(last['title']==name)
                                    last['data'].push(line.sub(/^^解答[ 　]/,""))
                                else
                                    item['contents'].push({"title"=>name,"data"=>[line.sub(/^解答[ 　]/,"")]})
                                end
                            else
                                item['contents'].push({"title"=>name,"data"=>[line.sub(/^解答[ 　]/,"")]})
                            end
                    elsif last.class.to_s=="Hash"
                        last['data'].push(line)
                    elsif last==''
                        item['contents'][-1]=line;
                    else
                        item['contents'].push(line)
                    end
                else
                    item['contents'].push(line)
                end
            end
        end
    end
    if(item)
        @data['list'].push(item)
    end
end

def makejsonStr()
    puts @data.to_json
	puts "######"
end


def makejson()
	if @outName==''
		@outName=@sourcePath+@sourceName.split('.')[0]+'_ok.txt'
	elsif !@outName.match(/\.[\S]{3,4}$/)
		@outName=@outName+"\\"+@sourceName.split('.')[0]+'_ok.txt'
		puts @outName
	end

	f1=File.new(@outName, "w")
	f1.puts @data.to_json
	f1.close
	puts '================================================='
	puts "\n文件保存成功！"
	puts @outName
	puts "\n"
	puts '================================================='
end

def makehtml()

	if @outName==''
		@outName=@sourcePath+@sourceName.split('.')[0]+'.html'
	elsif !@outName.match(/\.[\S]{3,4}$/)
		@outName=@outName+"\\"+@sourceName.split('.')[0]+'.html'
		puts @outName
	end
	f1=File.new(@outName, "w")
	@html=@html.gsub(/@data@/,@data.to_json)
    if(@platform=='tablepad')
        @html=@html.gsub(/@@platform@@/,'<script type="text/javascript" src="js/asinterface.js"></script>')
    else
        @html=@html.gsub(/@@platform@@/,"")
    end

	f1.puts @html
	f1.close
	puts '================================================='
	puts "\n文件保存成功！"
	puts @outName
	puts "\n"
	puts '================================================='
end

def makeHtmlFromTemple(filename)
	f=File.open(filename,"r:utf-8")
	@html=''
	f.each do |line|
		@html<<line
	end
	f.close
	makehtml
end


if(ARGV.length==0)
    #用法：lesson.rb c:\xxx\xxx.txt html c:\output\xxxx.html pc   按照pc格式输出
            # lesson.rb c:\xxx\xxx.txt html c:\output\xxxx.html tablepad   按照平板格式输出
	puts "USAGE:==============\n\tStart:ruby xxx.rb 第一课.txt 格式 路径或完整文件名 pc"
else
	urlArr=ARGV[0].encode('utf-8').split(/[\\\/]/)
	if urlArr.length==1
		@sourceName=urlArr[0]
	else
		@sourceName=urlArr[-1]
		urlArr.pop
		@sourcePath=urlArr.join("\\")+"\\"
	end

	if ARGV[1]
		@format=ARGV[1].encode('utf-8')
	end

	if ARGV[2]
		@outName=ARGV[2].encode('utf-8')
	end

    if ARGV[3]
        @platform=ARGV[3].encode('utf-8')
    end

	fenxiProcess
	if @format=='json'
		makejsonStr()
	elsif @format=='html'
		makehtml
	elsif @format.match(/\.html/)
		makeHtmlFromTemple(@format)
	else
		raise '无法识别的文件格式'.encode!("GBK")
	end
end




