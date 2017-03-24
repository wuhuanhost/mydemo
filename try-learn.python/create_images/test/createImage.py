# -*- coding: utf-8 -*-
from PIL import Image,ImageFont,ImageDraw
import time

def genImg():
	#加载背景图片
	startTime=time.time()

	back_img = Image.open(ur'E:\create_images\images\template.jpg')
	avatar_img = Image.open(ur'E:\create_images\images\avatar.jpg')
	qrcode_img = Image.open(ur'E:\create_images\images\qrcode.jpg')
	mask=Image.open(ur'E:\create_images\images\mask.jpg')

	# 合并头像和图层
	avator=test1()

	region = avator
	region = region.resize((170, 170))
	back_img.paste(region,(235,155))

	region = qrcode_img
	region = region.resize((180, 180))
	back_img.paste(region,(230,860))

	font1 = ImageFont.truetype("E:\渲染引擎\公众号网站项目\server\public\asset\simhei.ttf",32)
	drawImage=ImageDraw.Draw(back_img)
	drawImage.text((24, 66), unicode('慕蓉','utf-8'), font=font1)

	font2 = ImageFont.truetype("E:\渲染引擎\公众号网站项目\server\public\asset\simhei.ttf",30)
	drawImage=ImageDraw.Draw(back_img)
	drawImage.text((498, 23), unicode('成长时间','utf-8'), font=font2)

	font3 = ImageFont.truetype("E:\渲染引擎\公众号网站项目\server\public\asset\simhei.ttf",30)
	drawImage=ImageDraw.Draw(back_img)
	drawImage.text((560, 69), unicode('1024','utf-8'), font=font3)

	font4 = ImageFont.truetype("E:\渲染引擎\公众号网站项目\server\public\asset\simhei.ttf",30)
	drawImage=ImageDraw.Draw(back_img)
	drawImage.text((560, 113), unicode('分钟','utf-8'), font=font4)

	back_img.save('E:\create_images\images\out.png') #保存图片
	back_img.show()
	endTime=time.time()

	print startTime
	print endTime
	print endTime-startTime



def test1():
	img1 = Image.open(ur'E:\create_images\images\avatar.jpg')
	img2 = Image.new("RGBA",img1.size,(255,255,255,0))
	mask = Image.open('E:\create_images\images\\mask.jpg','r').convert('L').resize(img1.size,Image.BILINEAR)
	print img1
	img=Image.composite(img1,img2,mask)
	#img.show()
	return img

def test():
	font = ImageFont.truetype("E:\渲染引擎\公众号网站项目\server\public\asset\simhei.ttf", 200)
	bg = Image.new('RGBA', (720, 404), '#0099ff')
	mask = Image.new('1', (720, 404))

	draw = ImageDraw.Draw(mask)
	draw.text((0, 0), '#HELLO', font=font, fill='#ffffff')

	trans = Image.new('RGBA', (720, 404))
	bg.paste(trans, (0, 0), mask)
	bg.save('text.png', 'PNG')

genImg()
#test1()