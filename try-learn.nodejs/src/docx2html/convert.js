var mammoth = require("mammoth");
var fs=require('fs')
 
var options = {
    convertImage: mammoth.images.imgElement(function(image) {
        return image.read("base64").then(function(imageBuffer) {
            return {
                src: "data:" + image.contentType + ";base64," + imageBuffer
           };
        });
    })}

function convertToHtml(input,output){
	mammoth.convertToHtml({path: input},options)
		.then(function(result){
		console.log(input);
		console.log(output);
			var html = result.value; // The generated HTML 

			var document="<!DOCTYPE html><html lang='zh_CN'><head><meta charset='UTF-8'><title>Document</title><style>table,table td,table th{border:1px solid;border-collapse: collapse;}</style></head><body>";

			document+=html;
		
			document+="</body></html>";

			fs.writeFileSync(output,document.replace(/\\([^\\])/g,function(reg){
			
					return reg.replace(/\\/g,"");
			}));
			var messages = result.messages; // Any messages, such as warnings during conversion 

		})
		.done();
}

var input=process.argv[2];
var output=process.argv[3];
var path="";
if(input!==""||input!==undefined){
	path=input;
	//读取docx目录
	var list=fs.readdirSync(path);
	list.forEach(function(item,index){
		var _input=path+"\\"+item;
		var _output=output+"\\"+item.replace(".docx",".html")
		if(fs.statSync(_input).isFile()){
		    convertToHtml(_input,_output);
		}
	});
}


	