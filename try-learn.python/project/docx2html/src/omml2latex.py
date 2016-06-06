import sys

sys.path.append("..")

from lib.dwml.docx import to_latex

"""
把word中的omml公式替换为latex公式
"""

to_latex(filename='E:\\test123.docx')

