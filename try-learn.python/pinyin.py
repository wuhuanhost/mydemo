# -*- coding: utf-8 -*-
from pypinyin import pinyin, lazy_pinyin
from pypinyin import lazy_pinyin

import pypinyin

print pinyin(u'中心', style=pypinyin.TONE2, heteronym=True)

print lazy_pinyin(u'中心',style=pypinyin.TONE2)#加入了分词处理


#项目地址https://github.com/mozillazg/python-pinyin

