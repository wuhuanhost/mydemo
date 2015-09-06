# -*- coding: utf-8 -*-
import requests
import sys
reload(sys)
sys.setdefaultencoding('utf8')
import re


##详细使用文档：http://cn.python-requests.org/zh_CN/latest/

#请求网页
r = requests.get('http://www.zhidaow.com')
#为请求到的页面进行编码
r.encoding='utf-8'#网页编码成utf-8
#输出请求的内容
# print r.text


##通过淘宝ip接口获取ip信息的方法
def queryIP(ipstr):
    ip = requests.get('http://ip.taobao.com/service/getIpInfo.php?ip='+ipstr)
    ip.encoding='utf-8'
    #命令行下面执行输出结果
    print ip.json()["data"]["city"]
    pass

# queryIP('125.76.203.176')

##请求ip138的ip数据【数据需要自己分析html】
def getIP(ipstr):
	ip=requests.get('http://www.ip138.com/ips138.asp?ip='+ipstr);
	ip.encoding='gbk';
	print ip.text;
	pass

getIP('125.76.203.176')