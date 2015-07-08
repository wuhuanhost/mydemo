var datahtml = '';
//渲染方法总控制器
function controller(data) {
	this.data = data;
}
controller.prototype.callback = function() {
	console.log("脚本加载完成......");
	for (var i = 0; i < this.data.length; i++) {
		for (var j = 0; j < check.length; j++) {
			if (this.data[i].type == check[j].type) {
				window[check[j].use].init(this.data[i]);
				window[check[j].use].genHtml();
				datahtml += window[check[j].use].html;
			}
		}
	}
	datahtml += "<div style='height:600px;'></div>";
	$("#content").append(datahtml);
};
//加载需要的js和css文件
controller.prototype.control = function() {
	var files = new Array();
	//循环渲染数据	
	for (var i = 0; i < this.data.length; i++) {
		//循环用户指定的渲染器
		for (var j = 0; j < check.length; j++) {
			if (this.data[i].type == check[j].type) {
				buildObj(files, check[j].use);
			}
		}
	}
	for (var k = 0; k < files.length; k++) {
		console.log(files[k]);
	}
	loadJsCss(files, abc.callback);
};
//组装加载对象的方法
function buildObj(list, use) {
	var obj = {};
	obj.type = "js";
	obj.url = "js/gen/" + use + ".js";
	list.push(obj);
	var obj1 = {};
	obj1.type = "css";
	obj1.url = "css/gen/" + use + ".css";
	list.push(obj1);
};
//加载js和css的方法
function loadJsCss(arr, callback) {
	var len = arr.length,
		num = 0,
		ref = null;
	if (len == 0) {
		return false;
	}
	for (var i in arr) {
		///创建节点
		if (arr[i].type == "js") {
			ref = document.createElement("script");
			ref.setAttribute("type", "text/javascript");
			ref.setAttribute("src", arr[i].url);
		} else {
			ref = document.createElement("link");
			ref.setAttribute("rel", "stylesheet");
			ref.setAttribute("type", "text/css");
			ref.setAttribute("href", arr[i].url);
		}
		if (typeof ref != "undefined") {
			//将创建的节点插入document
			document.getElementsByTagName("head")[0].appendChild(ref);
			if (ref.src != null) {
				console.log(ref.src + "     加载完成");
			} else {
				console.log(ref.href + "     加载完成");
			}
			ref.onload = ref.onreadystatechane = function() {
				if (ref.readyState && ref.readyState != "loaded" && ref.readyState != "complete") {
					return;
				}
				num = num + 1;
				//判断加载的个数是否等于总个数，执行回调
				if (num == len && typeof(callback) === "function") {
					callback();
				}
			}
		}
	}
};
//模拟数据
var data = [{
	"type": "h1",
	"title": "unit1 达标检测卷",
	"id": 1,
	"index": 1,
	"scores": 0,
	"img": "img",
	"mp3": "mp3"
}, {
	"type": "h2",
	"title": "听力部分（30分）",
	"id": 2,
	"index": 2,
	"scores": 0,
	"img": "img",
	"mp3": "mp3"
}, {
	"type": "picture-one",
	"title": "一、听录音，选出你听到的单词或短语（5分）",
	"id": 1,
	"index": 1,
	"scores": 5,
	"img": "xxx.jpg",
	"mp3": "xxx.mp3",
	"data": [{
		"img": "img/1-1.jpg",
		"answer": "4"
	}, {
		"img": "img/1-2.jpg",
		"answer": "5"
	}, {
		"img": "img/1-3.jpg",
		"answer": "1"
	}, {
		"img": "img/1-4.jpg",
		"answer": "3"
	}, {
		"img": "img/1-5.jpg",
		"answer": "2"
	}]
}, {
	"type": "picture-one",
	"title": "二、听录音，判断下列图片与你听到的内容是（Y）否（N）相符。（5分）",
	"id": 2,
	"index": 2,
	"scores": 5,
	"img": "xxx.jpg",
	"mp3": "xxx.mp3",
	"data": [{
		"img": "img/2-1.jpg",
		"answer": "4"
	}, {
		"img": "img/2-2.jpg",
		"answer": "5"
	}, {
		"img": "img/2-3.jpg",
		"answer": "1"
	}, {
		"img": "img/2-4.jpg",
		"answer": "3"
	}, {
		"img": "img/2-5.jpg",
		"answer": "2"
	}]
}, {
	"type": "choice",
	"title": "三、听录音，选出正确的答语。（10分）",
	"id": 3,
	"index": 3,
	"scores": 10,
	"img": "img",
	"mp3": "mp3",
	"content": null,
	"data": [{
		"answer": "B",
		"qusetion": null,
		"option": ["A:No, there is’t.", "B:It’s near the school.", "C:Yes, it is."]
	}]
}, {
	"type": "trueorfalse",
	"title": "四、听录音，判断下列句子与你听到的内容是（Y）否（N）相符。（10分）",
	"id": 4,
	"index": 4,
	"scores": 10,
	"img": "xxx.jpg",
	"mp3": "xxx.mp3",
	"data": [{
		"question": "1.There are three places（地方）in the dialogue（对话）.",
		"answer": "N"
	}, {
		"question": "2.The bookstore is far from the post office.",
		"answer": "N"
	}, {
		"question": "3.Oliver walks to the bookstore.",
		"answer": "Y"
	}, {
		"question": "4.Oliver asks a police officer for help.",
		"answer": "Y"
	}, {
		"question": "5.Oliver turns right at the library.",
		"answer": "N"
	}]
}, {
	"type": "h2",
	"title": "笔试部分（70分）",
	"id": 2,
	"index": 2,
	"scores": 0,
	"img": "img",
	"mp3": "mp3"
}, {
	"type": "picture-one",
	"title": "五、根据图片写出相应的单词或词组。（12分）",
	"id": 5,
	"index": 5,
	"scores": 12,
	"img": "xxx.jpg",
	"mp3": "xxx.mp3",
	"data": [{
		"img": "img/3-1.jpg",
		"answer": "post office"
	}, {
		"img": "img/3-2.jpg",
		"answer": "post office"
	}, {
		"img": "img/3-3.jpg",
		"answer": "post office"
	}, {
		"img": "img/3-4.jpg",
		"answer": "post office"
	}, {
		"img": "img/3-5.jpg",
		"answer": "post office"
	}, {
		"img": "img/3-6.jpg",
		"answer": "post office"
	}]
}, {
	"type": "choice",
	"title": "六、单项选择。（12分）",
	"id": 6,
	"index": 6,
	"scores": 12,
	"img": "img",
	"mp3": "mp3",
	"content": null,
	"data": [{
		"answer": "B",
		"qusetion": ["（   ）6. _______ a great museum!"],
		"option": ["A.How ", "B.What", "C.Where"]
	}]
}, {
	"type": "trueorfalse",
	"title": "七、给下列句子排序，使其成为一段完整的对话。（5分）",
	"id": 7,
	"index": 7,
	"scores": 5,
	"img": "xxx.jpg",
	"mp3": "xxx.mp3",
	"data": [{
		"question": "（   ）How can I get there?",
		"answer": "2"
	}, {
		"question": "（   ）Excuse me.Where is the restaurant?",
		"answer": "1"
	}, {
		"question": "（   ）Thanks.",
		"answer": "3"
	}, {
		"question": "（   ）Go straight.Then turn right at the crossing.",
		"answer": "5"
	}, {
		"question": "（   ）Its behind the park.",
		"answer": "4"
	}]
}, {
	"type": "underlines",
	"title": "八、按要求完成下列各题。（12分）",
	"id": 8,
	"index": 8,
	"scores": 12,
	"img": "img",
	"mp3": "mp3",
	"data": [{
		"answer": "The shop is near the park.",
		"qusetion": ["6.The shop is <u>next to</u> the park.（写出近义词）"],
		"underline": ["Underline", "The shop is", "^_^", "the park"]
	}]
}, {
	"type": "choice",
	"title": "九、完形填空。（10分）",
	"id": 9,
	"index": 9,
	"scores": 10,
	"img": "img",
	"mp3": "mp3",
	"content": ["Now Amy is at home. She wants to go to the park. She asks a police officer the way.", "Amy: ＿　＿ can I go to the park?", "Police officer: You can go there by bus.", "Amy: Is it far away ＿ here?", "Police officer: Yes, it’s far.", "Amy: ＿the bus stop?", "Police officer:Turn left ＿　the cinema and you can see the bus stop on your right.", "Amy:Thank you very much.", "Police officer:That’s OK."],
	"data": [{
		"answer": "B",
		"qusetion": null,
		"option": ["（   ）5.A.for", "B.to", "C.at"]
	}]
}, {
	"type": "choice",
	"title": "十、阅读短文，选择正确的答案。（10分）",
	"id": 10,
	"index": 10,
	"scores": 10,
	"img": "img",
	"mp3": "mp3",
	"content": ["Mrs Jones is a teacher. Her house isn’t far away from her school, and she often walks there from Monday to Friday. On Saturday, she often goes to the bookstore to buy some new books. She goes there by bike. She likes reading books very much."],
	"data": [{
		"answer": "B",
		"qusetion": ["（   ）1.Mrs Jones is a ______."],
		"option": ["A.mother ", "B.teacher", "C.worker"]
	}, {
		"answer": "B",
		"qusetion": ["（   ）2.Mrs Jones goes to work ______."],
		"option": ["A.on foot", "B.by bike ", "C.by car"]
	}, {
		"answer": "B",
		"qusetion": ["（   ）3.Mrs Jones usually goes to the ______ on Saturday."],
		"option": ["A.shop", "B.school", "C.bookstore"]
	}, {
		"answer": "B",
		"qusetion": ["（   ）4.Mrs Jones works ______."],
		"option": ["A.on Sunday ", "B.On Saturday", " C.from Monday to Friday"]
	}, {
		"answer": "B",
		"qusetion": ["（   ）5.Mrs Jones goes to the bookstore______ ."],
		"option": ["A.by bike", "B.by car", "C.on foot"]
	}]
}, {
	"type": "choice",
	"title": "十一、小小作文。（9分）",
	"id": 11,
	"index": 11,
	"scores": 9,
	"img": "img",
	"mp3": "mp3",
	"content": ["假设你是Oliver，你想去电影院，请你根据所给的路线图写一段与警察叔叔问路的对话。不少于6句。"],
	"data": []
}];
//模拟用户指定的渲染器[picture类型的数据使用picture-1渲染器渲染]
var check = [{
	"type": "picture-one",
	"use": "picture_one"
}, {
	"type": "choice",
	"use": "choice"
}, {
	"type": "underlines",
	"use": "underline"
}, {
	"type": "trueorfalse",
	"use": "trueorfalse"
}];
//测试
var abc = new controller(data);
abc.control();