# encoding: utf-8
#http://www.ruby-doc.org/stdlib-2.0/libdoc/net/http/rdoc/Net/HTTP.html   ##官方样例

require 'net/http'
http = Net::HTTP.new('www.baidu.com', 80)
http.use_ssl = false
path = '/'


resp, data = http.get(path)
cookies = resp.response['set-cookie'].split(', ')  #获取cookies
puts cookies
puts "============================================================"

headers = {   ##定义http请求头信息
  'Cookie' => cookies[0].split('; ')[0],
  'Referer' => 'http://qa.dangdang.com',
  'Content-Type' => 'application/x-www-form-urlencoded'
}
resp, data = http.get(path, headers)


puts 'Code = ' + resp.code    ##请求状态码
puts 'Message = ' + resp.message  
puts "------------------------------------------------------------"
resp.each {|key, val| puts key + ' = ' + val}  ##遍历所有http响应头