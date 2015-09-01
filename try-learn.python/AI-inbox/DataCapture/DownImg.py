# -*- coding: utf-8 -*-
import requests
import sys
reload(sys)
sys.setdefaultencoding('utf8')
import re

"""
获取网页内容
"""
def getHtml(url):
	r1=requests.get(url);
	r1.encoding='utf-8'
	return r1.text;


"""
获取网页中的图片地址
"""
def getImgUrl(html):
    imgArr=re.findall(u'src="(.*?)"', html)
    return imgArr
	



"""
下载图片的方法
"""
def downImg(imgList):
	for x in range(len(imgList)):
		r2 = requests.get(imgList[x],stream=True)
    		filename=''+str(x+1)+'.jpg'
    		with open(filename, 'wb') as f:
    			for img in r2.iter_content():
        			f.write(img)

#获取网页
html1=getHtml('http://www.zhidaow.com');
#解析网页中的图片地址
imgList=getImgUrl(html1)
#根据图片地址下载图片
print imgList
downImg(imgList)




