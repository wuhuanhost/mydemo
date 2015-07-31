# encoding: utf-8
require 'fileutils'
puts "--------------start-------------------------"

FileUtils.rm_r(Dir.entries('E:\\数学\\images'),:force=>true)

Dir.open('E:\\数学\\img') do |dir|
	dir.each do |name|
		  puts name.encode!("utf-8")#替换之前
		  ##替换中文为中文的拼音
		  file=name.encode("utf-8").gsub!(/\【([^\【\】]*?)\】/){|s|  

			if s=="【检测与评估答案】"
			   s.gsub!("【检测与评估答案】","jcypgda")

			elsif s=="【自主学习】"
			   s.gsub!("【自主学习】","zzxx")	
		
			elsif s=="【检测与评估】"
			   s.gsub!("检测与评估","jcypg")	
		
			elsif s=="【要点导学】"
			   s.gsub!("【要点导学】","yddx")	
		
			elsif s=="【滚动练习】"
			   s.gsub!("【滚动练习】","gdlx")
			elsif s=="【答案】"
			   s.gsub!("【答案】","da")		
			end
		}
		puts file
		
		if name !="." and name !=".."
			 # FileUtils.cp("E:\\数学\\img\\#{name}", "E:\\数学\\images\\#{file}")	
		end
		
		
		
	end
end
puts "--------------end-------------------------"


