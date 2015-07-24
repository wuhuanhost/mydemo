# encoding: utf-8

#tips1 交换两个数的大小
def exchangeVariable(x,y)
	puts "交换前： x=>#{x}  x=>#{y}"
	x,y=y,x
	puts "交换后： x=>#{x}  y=>#{y}"
end

exchangeVariable(1,2);