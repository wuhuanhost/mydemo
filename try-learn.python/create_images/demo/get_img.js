var fs=require('fs')
var exec=require('child_process').exec;
function genPic(cb){
	var cmdArr = [];
	cmdArr.push("python");
	cmdArr.push("process_img.py");
	cmdArr.push("admin");
	cmdArr.push("avatar.jpg");
	cmdArr.push("100");
	cmdArr.push("qrcode.jpg");
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

genPic(function(err,result){
	if(err){
		console.error(err);
	}else{
		console.log(result);
	}
});