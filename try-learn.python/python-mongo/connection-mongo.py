#coding=utf-8
import pymongo
import json

def dadasd():
	##连接mongo服务
	client = pymongo.MongoClient("localhost", 27017);
	##连接数据库
	db = client.test;
	##查询所有的数据
	data=db.person.find();

	arr=[];

	for _dict in data:
		##_dict是dict类型
		arr.append(_dict);




	print (str(arr).decode('utf-8'))
	









	# print json.dumps(dict(abc),ensure_ascii=False,indent=2)




def byteify(input):
    if isinstance(input, dict):
        return {byteify(key):byteify(value) for key,value in input.iteritems()}
    elif isinstance(input, list):
        return [byteify(element) for element in input]
    elif isinstance(input, unicode):
        return input.encode('utf-8')
    else:
        return input



dadasd();
