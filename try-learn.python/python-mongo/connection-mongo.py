#coding=utf-8
import pymongo
from bson import BSON 
from bson import json_util as jsonb
import json
import sys
reload(sys)
sys.setdefaultencoding('utf8')


print sys.getdefaultencoding()


def dadasd():
	##连接mongo服务
	client = pymongo.MongoClient("localhost", 27017);
	##连接数据库
	db = client.test;
	##查询所有的数据
	data=db.person.find();
	
	arr=[];
	filewrite=open("test.txt","w+")
	for _dict in data:
		##_dict是dict类型
		arr.append(_dict);

		for x in _dict.keys():
			if x!='_id':
				print  _dict[x].decode('utf8')
				filewrite.write(_dict[x])
		
			
			
			



 

	abc=jsonb.dumps(list(arr)) 

	# print abc.decode('utf-8')

	# print type(json.dumps(eval(abc),ensure_ascii=False,indent=2))
	
	# print type(eval(abc))

	# print (str(arr).decode('utf-8'))
	









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
