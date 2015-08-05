# -*- coding: utf-8 -*-
from pypinyin import pinyin, lazy_pinyin, TONE2
from snownlp import SnowNLP
import pypinyin

#项目地址https://github.com/mozillazg/python-pinyin

print pinyin(u'中心', style=pypinyin.TONE2, heteronym=True)

print lazy_pinyin(u'中心',style=pypinyin.TONE2)#加入了分词处理

print "--------------------------我是分割线---------------------------------"

hans = u'单于简单123作者着急'
hans_seg = SnowNLP(hans).words  # 分词处理
hans_seg
rege=lazy_pinyin(hans_seg, style=TONE2)
for sss in rege:
   print sss

