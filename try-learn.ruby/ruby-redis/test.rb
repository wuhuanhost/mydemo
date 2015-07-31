# encoding: utf-8
require 'redis'
require 'json'


#1、【gem install redis】 安装redis的ruby驱动
#redis的连接对象
$redis=Redis.new(:host => "localhost", :port => 6379)
puts "测试redis......"


#添加
def add(key,value)
	flag=$redis.set:"#{key}","#{value}"
	if flag=="OK"
		puts "#{key}===============================#{value}            添加成功"
	else
		puts "#{key}===============================#{value}            添加失败"
	end
end

#删除
def delete(key)
	flag=$redis.del:"#{key}"
	if flag==1
		puts "key=#{key}的对象                        删除成功"
	else
		puts "key=#{key}的对象                        删除失败"
	end
end

#修改【修改方法可以通过添加的形式的修改】
def update(key)
	
end

#查找key对应的value
def queryByKey(key)
	value=$redis.get:"#{key}"
	# puts value.encoding
	return value;
end


json={'name'=>'李明','age'=>18,'birthday'=>'1997-01-01'};

add("person",json.to_json())#json

aabbcc=queryByKey("person")#获取保存的json

aa=JSON.parse aabbcc  #获取到的json字符串转换为json对象

puts "======person信息======="
puts aa['name'].encode!("GBK")
puts aa['age']
puts aa['birthday']
puts "======================="


delete("person")

#显示当前数据库中key的数量
puts $redis.dbsize
#显示所有的key
puts $redis.keys	