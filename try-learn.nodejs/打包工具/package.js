var fs = require("fs");

var xml2js = require('xml2js');


var builder = new xml2js.Builder();

/**
 * 创建目录节点
 * @return {[type]} [description]
 */
function createDirectoryEle(name) {
    var directoryStrObj = {
        Type: 3,
        Name: ""+name+"",
        Files: {
            File: []
        }
    }
    return directoryStrObj;
};


/**
 * 创建文件节点
 * @param  {[type]} fileName [description]
 * @param  {[type]} filePath [description]
 * @return {[type]}          [description]
 */
function createFileEle(fileName, filePath) {
    var fileStrObj = {
        Type: 2,
        Name: "" + fileName + "",
        File: "" + filePath + "",
        ActiveX: false,
        ActiveXInstall: false,
        Action: 0,
        OverwriteDateTime: false,
        OverwriteAttributes: false,
        PassCommandLine: false,
    };
    return fileStrObj;
}
/**
 * 迭代读取路径下的所有文件
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */
function readFiles(fileName, path) {
    // var list = fs.readdirSync(path);
    // //迭代文件
    // list.forEach(function(item, index) {
    //     var filePath = path + "/" + item;
    //     var isFile = fs.statSync(filePath).isFile();
    //     if (isFile) {
    //         var f = createFileEle(item, filePath);

    //     }
    // });

    // //迭代目录
    // list.forEach(function(item, index) {
    //     var filePath = path + "/" + item;
    //     var isDirectory = fs.statSync(filePath).isDirectory();
    //     if (isDirectory) {
    //         readFiles(filePath);
    //     }
    // });

    //目录
    if (fs.statSync(path).isDirectory()) {
    	if(fileName==""){
			var ele = createDirectoryEle(path);
    	}else{
    		var ele = createDirectoryEle(fileName);
    	}
        var list = fs.readdirSync(path);
        list.forEach(function(element, index) {
            var filePath = path + "\\" + element;
            ele.Files.File.push(readFiles(element, filePath));
        });
        return ele;
    } else {
        //文件
        return createFileEle(fileName, path);
    }

};

/**
 * 生成conf打包文件
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function genConfxml(obj){

		var xml123 = readFiles("", obj.resource);

		var xml = builder.buildObject({"Files":xml123.Files});

		var xmlStr=xml.toString();

		// fs.writeFileSync("E:\\渲染引擎\\工具集\\打包配置文件生成\\test.xml",xml);

		xmlStr=xmlStr.replace(/<\?.*?>/gi,"").replace(/<root>/gi,"<Files><File>").replace(/<\/root>/gi,"</File></Files>");
		
		var mobanStr=fs.readFileSync(".\\moban.xml").toString();

		mobanStr=mobanStr.replace(/@@input@@/,obj.input).replace(/@@output@@/,obj.output);

		mobanStr=mobanStr.replace(/@@Files@@/,xmlStr);

		var aabbcc=new Buffer(mobanStr,"unicode");

		fs.writeFileSync(obj.conf_url,aabbcc);

}


//命令行中的第一个参数
var p1 = process.argv[2];//enigam路径
var p2 = process.argv[3];//init的路径
var initjson;
if(p2!==undefined){
	   initjson=JSON.parse(fs.readFileSync(p2,"utf8"));
	   genConfxml(initjson);
}

console.log("++++++++++++++++++++++++++++++")

//通过系统子进程获取执行系统命令的对象
var exec = require('child_process').exec; 

//切换目录执行git status
//exec('git status', {cwd: '/home/ubuntu/distro'}, /* ... */);

var cmdStr="enigmavbconsole.exe "+initjson.conf_url;

console.log(cmdStr)

exec(cmdStr,{cwd:initjson.enigma},function(err,stdout,stderr){

if(err){
	console.log(stderr);
}else{
	console.log(stdout);
}

});




