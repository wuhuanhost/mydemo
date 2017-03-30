var fs=require('fs')
var exec=require('child_process').exec;
function genPic(cb){
	var cmdArr = [];
	cmdArr.push("python");
	cmdArr.push("process_img.py");
	cmdArr.push("李明");
	cmdArr.push("avatar.jpg");
	cmdArr.push("100");
	cmdArr.push("qrcode.jpg");
	cmdArr.push("template.jpg");
	cmdArr.push("output.jpg");
	var cmd = cmdArr.join(" ");
	exec(cmd,function(err,stdout,stderr){
		if(err){
			cb(err,null)
		}
		if(stdout){
			console.log('stdout',stdout);
		}
	});
}

//调用
genPic(function(err,result){
	if(err){
		console.error(err);
	}else{
		console.log(result);
	}
});