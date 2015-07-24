# -*- coding: utf-8 -*-
import Tkinter#python标准的gui开发库

import tkMessageBox

top = Tkinter.Tk()

top.geometry('800x600+0+0') #800x600代表了初始化时主窗口的大小，0，0代表了初始化时窗口所在的位置

def helloCallBack():
   tkMessageBox.showinfo("Hello Python", "Hello World")

B = Tkinter.Button(top, text ="Hello,Python!", command = helloCallBack)

B.pack()

top.mainloop();




