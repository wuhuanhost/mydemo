# -*- coding: utf-8 -*-

##读取文件
def readFile(path):
	fileRead=open(path)
	try:
		text=fileRead.read()
		print text
	finally:
		fileRead.close()


readFile("E:\\mydemo\\try-learn.python\\python-mongo\\test.txt")




