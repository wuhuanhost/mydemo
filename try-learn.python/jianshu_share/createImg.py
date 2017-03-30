# -*- coding: utf-8 -*-
from PIL import Image,ImageFont,ImageDraw
import time,sys
reload(sys)
sys.setdefaultencoding('utf-8')

"""
生成分享图片的方法
"""
def createShareImg(avatarUrl,qrcodeUrl,nickname,countWord,countLiked):
	startTime=time.time()
	#加载背景图片
	background=Image.open(ur'template.jpg')
	#加载头像图片
	avatar = Image.open(avatarUrl,"r")
	qrcode_img = Image.open(qrcodeUrl,"r")

	# 将背景图片和圆形头像合成之后当成新的背景图片
	back_img=drawCircleAvatar(avatar,background)

	#将二维码图片粘贴在背景图片上
	region = qrcode_img
	region = region.resize((180, 180))
	back_img.paste(region,(230,860))

	#绘制用户昵称
	font1 = ImageFont.truetype("simhei.ttf",32)
	drawImage=ImageDraw.Draw(back_img)
	drawImage.text((272, 366), unicode(nickname,'utf-8'), font=font1)

	#绘制用户写了多少字
	font2 = ImageFont.truetype("simhei.ttf",30)
	drawImage=ImageDraw.Draw(back_img)
	drawImage.text((110, 436), unicode(countWord,'utf-8'), font=font2)

	#绘制获取的点赞数
	font3 = ImageFont.truetype("simhei.ttf",30)
	drawImage=ImageDraw.Draw(back_img)
	drawImage.text((356, 436), unicode(countLiked,'utf-8'), font=font3)


	#保存图片到文件
	back_img.save('out.jpg') #保存图片
	endTime=time.time()
	
	print "本次生成图片一共用时：".decode("utf-8").encode("gbk")
	print str(endTime-startTime)+"秒".decode("utf-8").encode("gbk")


"""
将头像变成圆形绘制在背景图片上，然后将合成的图片对象返回
"""
def drawCircleAvatar(im,background):
	im = im.resize((170, 170));
	bigsize = (im.size[0] * 3, im.size[1] * 3)
	#遮罩对象
	mask = Image.new('L', bigsize, 0)
	draw = ImageDraw.Draw(mask) 
	draw.ellipse((0, 0) + bigsize, fill=255)
	mask = mask.resize(im.size, Image.ANTIALIAS)
	im.putalpha(mask)
	background.paste(im, (235, 155), im)
	return background

if __name__=='__main__':
	avatarUrl="avatar.jpg"
	qrcodeUrl="qrcode.jpg"
	nickname="梦想家"
	countWord="写了2388个字"
	countLiked="收获10个赞"
	createShareImg(avatarUrl,qrcodeUrl,nickname,countWord,countLiked)

