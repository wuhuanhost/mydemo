from PIL import Image
import os,glob

def changePicturePixel(filename,baseName):
	im = Image.open(filename) 
	x,y=im.size 
	rgba_im = im.convert('RGBA')

	newImg = Image.new("RGBA",(x,y),(255,255,255,0))

	for i in range (x):
	    for j in range (y):
			r, g, b,a = rgba_im.getpixel((i, j))
		    	# print r,g,b,a
		    	if baseName=="k3_1_3_image007.png":
		    		print r,g,b,a
			if a>0 and (r!=255 or g!=255 or b!=255) and (r<200 and g<200 and b<200):
				newImg.putpixel([i,j],(12,104,208,a))
			else:
			    newImg.putpixel([i,j],(255,255,255,a))		    		
	# newImg.show()

	newImg.save("D:\\test\\after_img\\"+baseName)

# changePicturePixel()

def action(path):
	for fn in glob.glob(path + os.sep + '*'):
		if os.path.isdir(fn):
			fun(fn)
		else:
			basename=os.path.basename(fn)
			changePicturePixel(fn,basename);

action("D:\\test\\before_img\\")