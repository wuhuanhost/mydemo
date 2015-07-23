# -*- coding: utf-8 -*-
import requests
import sys 
reload(sys) 
sys.setdefaultencoding( "utf-8" ) 

#请求网页
r = requests.get('http://www.zhidaow.com')
#为请求到的页面进行编码
r.encoding='utf-8'#网页编码成utf-8
#输出请求的内容
# print r.text


##通过淘宝ip接口获取ip信息的方法
def queryIP(ipstr):
    ip = requests.get('http://ip.taobao.com/service/getIpInfo.php?ip='+ipstr)
    print ip.json()['data']['country']
    pass


queryIP('114.114.123.132')