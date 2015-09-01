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
