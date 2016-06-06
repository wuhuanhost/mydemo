# -*- coding:utf-8 -*-
import re
import base64
class Base64ConvertImg(object):
	"""
	读取html文件
	"""
	BASEIMAGESRC="E:\\imagssss\\";
	def __init__(self,fileName):
		self.fileName=fileName
		self.img=0;
		self.imgArr=[];
		self.index=0;

	def read_html(self):
		with open(self.fileName,'r') as f:
			self.val=f.read();
			self.write_img_element()

	def write_img_element(self):
		#查找img标签
		match_img_re=re.compile(r'<img .*?/>')
		#获取img标签中src的值
		match_img_data=re.compile(r'src="(.+?)"')
		match_img_data.sub("",self.val)
		for img in match_img_re.findall(self.val):
			with open('abc.txt','w+') as f:
				#每个图片节点的src的值
				imgDatas=match_img_data.search(img).group().replace("src=\"","").replace("\"","")
				#构建图片地址
				imgSrc=str(self.img+1)
				self.img+=1
				#获取data中图片的后缀名
				imgSrc=Base64ConvertImg.BASEIMAGESRC+imgSrc+"."+imgDatas.split(";")[0].replace("data:image/","");
				#base64图片数据
				imgData=imgDatas.split(";")[1].replace("base64,","")
				#写入文件
				self.wirte_img(imgSrc,imgData);
				self.imgArr.append(imgSrc)
		
	def replace_img_element(self):
		print self.imgArr
		match_img_data=re.compile(r'src="(.+?)"')
		abcdasdasd=match_img_data.sub(self.mark,self.val)
			
		with open("e:\\abc.html","w") as f:
			f.write(abcdasdasd)
		
	def mark(self,m):
		src="src='"+self.imgArr[self.index]+"'";
		self.index=self.index+1
		return src

	#base64图片写入文件
	def wirte_img(self,src,data):
		imgData = base64.b64decode(data)
		leniyimg = open(src,'wb')
		leniyimg.write(imgData)
		leniyimg.close()

bci=Base64ConvertImg("e:\\index_test.html");
bci.read_html()
bci.replace_img_element()