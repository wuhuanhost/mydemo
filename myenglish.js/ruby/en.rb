require 'json'
@arr=[];
#图片题文本解析
def picture_one_process(io)
    data=getJsonHead(io.readline.strip)
    arr=[]
    io.each_line do |line|
        length=line.bytesize
        line.strip!
        line.gsub!(/\[([^\[\]]*?)\]/) {|s| s.gsub(/ /,"@@@")}
        if(line=="")
            next
        elsif(line.match(/^#/))
            io.pos=io.pos-length-1
            break
        else
            a=line.split(/ /)
            arr.push({'img'=>a[0],'answer'=>replaceBraces(a[1])})
        end
    end
    data['data']=arr
    return data
end



#判断题文本解析
def trueorfalse_process(io)
    data=getJsonHead(io.readline.strip)
    arr=[]
    io.each_line do |line|
        length=line.bytesize
        line.strip!
        if(line=="")
            next
        elsif(line.match(/^#/))
            io.pos=io.pos-length-1
            break
        else
            a=line.gsub!(/\[([^\[\]]*?)\]/) {|s| s.gsub(/ /,"@@@")}.split(/ /)
            arr.push({'question'=>a[0].gsub!("@@@"," ").gsub!("[","").gsub!("]",""),'answer'=>a[1]})
        end
    end
    data['data']=arr
    return data
end



#下划线题目解析
def underline_process(io)
    data=getJsonHead(io.readline.strip)
    arr=[]
    a=nil;
    b=nil;
    u=nil;
    io.each_line do |line|
        length=line.bytesize
        line.strip!
        line.gsub!(/\[([^\[\]]*?)\]/) {|s| s.gsub(/ /,"@@@")}
        if(line=="")
            next
        elsif(line.match(/^#/))
            io.pos=io.pos-length-1
            break
        elsif(line.match(/^Answer/))
            a=line.split(/ /);
        elsif(line.match(/^Question/))
            b=line.split(/ /);
        elsif(line.match(/^Underline/))
            u=line.split(/ /);
        end
    end
    u1=[];
    u.each_index do |index|
        u1.push(replaceBraces(u[index]));
    end
    b1=[];
    b.delete_at(0);
    b.each_index do |index|
        b1.push(b[index].gsub("[","").gsub("]","").gsub("@@@"," "));
    end
    if u.length>=3
        u.delete_at(0);
        arr.push({'answer'=>replaceBraces(a[1]),'qusetion'=>b1,'underline'=>u1});
    else
        arr.push({'answer'=>replaceBraces(a[1]),'qusetion'=>b1,'underline'=>u1[1]});
    end
    data['data']=arr
    return data
end

def replaceBraces(str)
    return str.gsub("[","").gsub("]","").gsub("@@@"," ");
end



#选择题文本解析
def choice_process(io)
    data=getJsonHead(io.readline.strip)
    arr=[]
    a=nil;#答案
    b=nil;#问题
    c=nil;#选项
    content=nil;
    io.each_line do |line|
        length=line.bytesize
        line.strip!
        line.gsub!(/\[([^\[\]]*?)\]/) {|s| s.gsub(/ /,"@@@")}
        if(line=="")
            next
        elsif(line.match(/^#/))
            io.pos=io.pos-length-1
            arr.push({'answer'=>a,'qusetion'=>b,'option'=>c});
            a=nil
            b=nil
            c=nil
            break
        elsif(line.match(/^Answer/))
            a=line.split(/ /)[1];
        elsif(line.match(/^Question/))
            b=line.split(/ /)[1..-1];
            b.each_index do |index|
                b[index]=b[index][1..-2].gsub(/@@@/," ")
            end
        elsif(line.match(/^Option/))
            c=line.split(/ /)[1..-1];
            c.each_index do |index|
                c[index]=c[index][1..-2].gsub(/@@@/," ")
            end
        elsif(line.match(/^Content/))
            content=line.split(/ /)[1..-1];
            content.each_index do |index|
                content[index]=content[index][1..-2].gsub(/@@@/," ")
            end
        else
            arr.push({'answer'=>a,'qusetion'=>b,'option'=>c});
            a=nil
            b=nil
            c=nil
        end
    end

    data['content']=content
    data['data']=arr
    return data
end


##定义一个读取每行文件的方法
def readFile(fileName)
    io=File.open(fileName,"r:utf-8");
    io.each_line do |line|
        line.strip!
        if(line.match(/^#h[12]/))
            @arr.push(getJsonHead(line))
            #h的处理器
        elsif(line.match(/^#picture-one/))
            #h2的处理器
            io.pos=io.pos-line.bytesize-1
            data=picture_one_process(io)
            if(data)
                @arr.push(data)
            end
        elsif(line.match(/^#trueorfalse/))
            #h2的处理器
            io.pos=io.pos-line.bytesize-1
            data=trueorfalse_process(io)
            if(data)
                @arr.push(data)
            end
        elsif(line.match(/^#choice/))
            #h2的处理器
            io.pos=io.pos-line.bytesize-1
            data=choice_process(io)
            if(data)
                @arr.push(data)
            end
        elsif(line.match(/^#underline/))
            #h2的处理器
            io.pos=io.pos-line.bytesize-1
            data=underline_process(io)
            if(data)
                @arr.push(data)
            end
        end
        # if line.match(/^#[\S]*? /);
        #   line.gsub!(/\[([^\[\]]*?)\]/) {|s| s.gsub(/ /,"@@@")};          
        #   @arr=line.split(/ /);
        # elsif line.match(/^content/);
        #   @content=line.split(/ /);
        # elsif line.match(/^img/)
        #   puts line
     #        imgs=line.split(/ /)[0];
     #        answer=line.split(/ /)[1];
        #   @jarrObject['img']=imgs;
        #   @jarrObject['answer']=answer;
        #   @jarr.push(@jarrObject);

        # end
    end
end     



##给变量赋值
def getJsonHead(str)
    str.gsub!(/\[([^\[\]]*?)\]/) {|s| s.gsub(/ /,"@@@")};
    arr=str.split(/ /)
    arr.each_index do |i|
        arr[i]=arr[i].gsub("[","").gsub("]","").gsub("@@@"," ");
    end
    data={'type'=>'','title'=>'','id'=>0,'index'=>0,'scores'=>0,'img'=>'','mp3'=>''}
    data['type']=arr[0].sub("#","");
    data['title']=arr[1];
    data['id']=arr[2].to_i if arr[2]
    data['index']=arr[3].to_i if arr[3]
    data['scores']=arr[4].to_i if arr[4]
    data['img']=arr[5] if arr[5]
    data['mp3']=arr[6] if arr[6]
    
    return data
end
##调用读取方法
readFile("lesson.txt");
puts @arr.to_json()

#puts @arr.to_json.gsub!(/\[([^\[\]]*?)\]/) {|s| s.gsub(/@@@/," ")};


                                                                                            