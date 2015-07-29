# encoding: utf-8
require 'redis'


#1、【gem install redis】 安装redis的ruby驱动
#redis的连接对象
$redis=Redis.new(:host => "localhost", :port => 6379)
puts "TEST REDIS LIST"


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
	puts value.encoding
	puts "#{key}==================#{value}"
end

add("name","李明")

queryByKey("name");

delete("list1")

#显示当前数据库中key的数量
puts $redis.dbsize
#显示所有的key
puts $redis.keys	