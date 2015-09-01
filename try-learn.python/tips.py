#encoding=utf-8

#自定义类
class MyClass(object):
	"""docstring for MyClass"""
	def __init__(self, arg):
		print "初始化方法......"
		print "参数的值为："+arg

aaaaa = MyClass("dasd");	

dict1 = {"name":"liming", "age":18, "class":"高三一班"};

print dict1.get("name", "key不存在");

print dict1.get("sdaf", "key不存在");







"""
在命令行执行脚本的时候后面可以跟上参数，每个参数用空格隔开，参数会保存到sys.arg这个系统变量中
循环sys.agrv取出所有的参数
"""
for arg in sys.argv:
    print arg
