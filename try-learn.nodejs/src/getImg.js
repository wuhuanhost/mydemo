var request=require("request");
var cheerio=require("cheerio");
var fs=require("fs");
var path=require("path");

function getHtml(){
	request("https://xiaoyehome.taobao.com/",function(err,response,body){
		if(!err&&response.statusCode==200){
			//console.log(body)
			searchImg(body);
		}
	})
}


function searchImg(body){
	$=cheerio.load(body);
	var abc=$("img").toArray();	
	for(var i=0;i<abc.length;i++){
		//console.log("https:"+abc[i].attribs.src);
		var uri="https:"+abc[i].attribs.src;
		var imgName=path.basename(abc[i].attribs.src);
		if(abc[i].attribs.src!=""&&abc[i].attribs.src!=undefined){
			console.log(imgName)
			request(uri).pipe(fs.createWriteStream('../static/'+imgName));  //调用request的管道来下载到 images文件夹下
		
		}
	}

}

//request('https://www.google.com.hk/images/srpr/logo3w.png').pipe(fs.createWriteStream('doodle.png'));

getHtml();