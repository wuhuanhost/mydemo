# -*- coding: utf-8 -*-
from PIL import Image,ImageFont,ImageDraw
import time
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

nickname=sys.argv[1]
avatarImg=sys.argv[2]
studyTime=sys.argv[3]
qrcodeUrl=sys.argv[4]
templateUrl=sys.argv[5]
outPutUrl=sys.argv[6]

print nickname+" "+studyTime+" "+qrcodeUrl

# cmd命令行编码为gbk,所以中文必须先解码为gbk编码然后在编码为utf-8
nickname=nickname.decode("gbk").encode("utf-8")

def genImg():
	startTime=time.time()
	#加载背景图片
	background=Image.open(templateUrl,"r")
	#加载头像图片
	avatar = Image.open(avatarImg,"r")
	qrcode_img = Image.open(qrcodeUrl,"r")

	# 合并头像和背景图层
	back_img=circle(avatar,background)

	#将二维码图片粘贴在背景图片上
	region = qrcode_img
	region = region.resize((180, 180))
	back_img.paste(region,(230,860))

	#将用户昵称绘制在背景图片上
	font1 = ImageFont.truetype("simhei.ttf",32)
	drawImage=ImageDraw.Draw(back_img)
	drawImage.text((24, 66), unicode(nickname,"utf-8"), font=font1)

	#绘制文字
	font2 = ImageFont.truetype("simhei.ttf",30)
	drawImage=ImageDraw.Draw(back_img)
	drawImage.text((498, 23), unicode("成长时间","utf-8"), font=font2)

	#绘制文字
	font3 = ImageFont.truetype("simhei.ttf",30)
	drawImage=ImageDraw.Draw(back_img)
	drawImage.text((560, 69), unicode(studyTime,"utf-8"), font=font3)

	#绘制文字
	font4 = ImageFont.truetype("simhei.ttf",30)
	drawImage=ImageDraw.Draw(back_img)
	drawImage.text((560, 113), unicode("分钟","utf-8"), font=font4)

	#保存图片到文件
	back_img.save(outPutUrl) #保存图片
	endTime=time.time()

	#print endTime-startTime

	print outPutUrl



"""
将头像变成圆形绘制在背景图片上，然后将合成的图片对象返回
"""
def circle(im,background):
	im = im.resize((170, 170));
	bigsize = (im.size[0] * 3, im.size[1] * 3)
	#遮罩对象
	mask = Image.new("L", bigsize, 0)
	draw = ImageDraw.Draw(mask) 
	draw.ellipse((0, 0) + bigsize, fill=255)
	mask = mask.resize(im.size, Image.ANTIALIAS)
	im.putalpha(mask)
	background.paste(im, (235, 155), im)
	return background

genImg()

