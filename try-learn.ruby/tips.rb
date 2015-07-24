# encoding: utf-8
#tips1 交换两个数的大小
aa=1;
bb=2
puts "交换前： a=>#{aa}  b=>#{bb}"
aa,bb=bb,aa;#交换aa和bb的值
puts "交换后： a=>#{aa}  b=>#{bb}"