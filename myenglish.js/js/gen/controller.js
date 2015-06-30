var controller = (function() {

	var controller = {};

	controller.init = function(data) {
		this.arr = data.arr;
		this.title = data.title;
		this.genHtml();
	};

	controller.genHtml = function() {
		controller.html = "";
		var html = "";
		for (var i = 0; i < this.arr.length; i++) {
			var type = this.arr[i].type;
			if (type == "picture-one") { //第一种图片渲染器
				po.init(this.arr[i]);
				html = html.concat(po.html + "<br/>");
			} else if (type == "choice") { //选择题
				choice.init(this.arr[i]);
				html = html.concat(choice.html);
			} else if (type == "underline") { //下划线题
				underline.init(this.arr[i]);
				html = html.concat(underline.html);
			} else if (type == "trueorfalse") { //判断正误，单个句子排序的题
				trueorfalse.init(this.arr[i]);
				html = html.concat(trueorfalse.html);
			} else if (type == "h1" || type == "h2") {
				subject.init(this.arr[i]);
				html = html.concat(subject.html);
			} else if (type == "write") {
				write.init(this.arr[i]);
				html = html.concat(write.html);
			}
		}
		controller.html += html+"<div style='height:600px;'></div>";
		//console.log(html);
	};
	return controller;
})();

var data = {
	"arr": [{
		"index": 0,
		"type": "h1",
		"title": "unit1 达标检测卷",
		"titleImg": "q",
		"id": "h1",
		"mp3": "qe",
		"scores": 0,
		"content": "q",
		"data": null,
	}, {
		"index": 0,
		"type": "h2",
		"title": "听力部分（30分）",
		"titleImg": "q",
		"id": "h1",
		"mp3": "qe",
		"scores": 0,
		"content": "q",
		"data": null,
	}, {
		"index": 1,
		"type": "picture-one",
		"title": "一、听录音，选出你听到的单词或短语（5分）",
		"titleImg": "abc.jpg",
		"id": "ting-picture-1",
		"mp3": "mp3/index.mp3",
		"scores": 5,
		"content": "",
		"data": [{
			"img": "img/1-1.jpg",
			"answer": "4",
		}, {
			"img": "img/1-2.jpg",
			"answer": "5",
		}, {
			"img": "img/1-3.jpg",
			"answer": "1",
		}, {
			"img": "img/1-4.jpg",
			"answer": "3",
		}, {
			"img": "img/1-5.jpg",
			"answer": "2",
		}]
	}, {
		"index": 2,
		"type": "picture-one",
		"title": "二、听录音，判断下列图片与你听到的内容是否相符（5分）",
		"titleImg": "abc.jpg",
		"id": "ting-picture-2",
		"mp3": "mp3/index.mp3",
		"scores": 5,
		"content": "",
		"data": [{
			"img": "img/2-1.jpg",
			"answer": "Y",
		}, {
			"img": "img/2-2.jpg",
			"answer": "N",
		}, {
			"img": "img/2-3.jpg",
			"answer": "Y",
		}, {
			"img": "img/2-4.jpg",
			"answer": "N",
		}, {
			"img": "img/2-5.jpg",
			"answer": "Y",
		}]
	}, {
		"index": 3,
		"type": "choice",
		"title": "三、听录音选出正确的答语（10分）",
		"titleImg": "abc.jpg",
		"id": "choice1",
		"mp3": "",
		"scores": 10,
		"content": null,
		"data": [{
			"answer": "B",
			"question": ["第一小题"],
			"option": ["A:Thanks", "B:Sure", "C:Good idea."]
		}, {
			"answer": "A",
			"question": ["第二小题"],
			"option": ["A:Go straight.Then turn left at the shop.", "B:It’s behind the zoo.", "C:It’s over there."]
		}, {
			"answer": "A",
			"question": ["第三小题"],
			"option": ["A:It’s next to the museum.", "B:Turn right, please.", "C:Let’s go."]
		}, {
			"answer": "B",
			"question": ["第四小题"],
			"option": ["A:Yes, it is.", "B:No, there is’t.", "C:There is a cinema."]
		}, {
			"answer": "C",
			"question": ["第五小题"],
			"option": ["A:It’s far from here.", "B:It’s near the school.", "C:Yes, it is."]
		}]
	}, {
		"index": 4,
		"type": "trueorfalse",
		"title": "四、听录音，判断下列句子与你听到的内容是（Y）否（N）相符。（10分）",
		"titleImg": "abc.jpg",
		"id": "trueorfalse1",
		"mp3": "",
		"scores": 10,
		"content": "",
		"data": [{
			"answer": "N",
			"question": "1.There are three places（地方）in the dialogue（对话）.",
		}, {
			"answer": "N",
			"question": "2.The bookstore is far from the post office.",
		}, {
			"answer": "Y",
			"question": "3.Oliver walks to the bookstore.",
		}, {
			"answer": "Y",
			"question": "4.Oliver asks a police officer for help.",
		}, {
			"answer": "N",
			"question": "5.Oliver turns right at the library.",
		}]
	}, {
		"index": 0,
		"type": "h2",
		"title": "笔试部分（70分）",
		"titleImg": "q",
		"id": "h1",
		"mp3": "qe",
		"scores": 0,
		"content": "q",
		"data": null,
	}, {
		"index": 5,
		"type": "picture-one",
		"title": "五、根据图片写出相应的单词或词组。（12分）",
		"titleImg": "abc.jpg",
		"id": "picture5",
		"mp3": "",
		"scores": 12,
		"content": "",
		"data": [{
			"img": "img/5-1.jpg",
			"answer": "post office",
		}, {
			"img": "img/5-2.jpg",
			"answer": "bookstore",
		}, {
			"img": "img/5-3.jpg",
			"answer": "hospital",
		}, {
			"img": "img/5-4.jpg",
			"answer": "crossing",
		}, {
			"img": "img/5-5.jpg",
			"answer": "go straight",
		}, {
			"img": "img/5-6.jpg",
			"answer": "trun right",
		}]
	}, {
		"index": 6,
		"type": "choice",
		"title": "六、单项选择。（12分）",
		"titleImg": "abc.jpg",
		"id": "choice2",
		"mp3": "",
		"scores": 12,
		"content": null,
		"data": [{
			"answer": "C",
			"question": ["1. _______. Is there a school near here?"],
			"option": ["A.Sorry", "B.OK ", "C.Excuse me"]
		}, {
			"answer": "C",
			"question": ["2.—_______ is the restaurant?—It’s behind the cinema."],
			"option": ["A.What ", "B.How", "C.Where "]
		}, {
			"answer": "B",
			"question": ["3.The park is _______ the zoo."],
			"option": ["A.next ", "B.next to", "C.next of"]
		}, {
			"answer": "A",
			"question": ["4.How can I _______ there?"],
			"option": ["A.get ", "B.getting", "C.to get"]
		}, {
			"answer": "B",
			"question": ["5.If you want to see a film, you can go to the _______."],
			"option": ["A.library", "B.cinema", "C.school"]
		}, {
			"answer": "B",
			"question": ["6. _______ a great museum!"],
			"option": ["A.How ", "B.What", "C.Where"]
		}]
	}, {
		"index": 7,
		"type": "trueorfalse",
		"title": "七、给下列句子排序，使其成为一段完整的对话。（5分）",
		"titleImg": "abc.jpg",
		"id": "trueorfalse1",
		"mp3": "",
		"scores": 5,
		"content": "",
		"data": [{
			"answer": "3",
			"question": "How can I get there?",
		}, {
			"answer": "1",
			"question": "Excuse me.Where is the restaurant?",
		}, {
			"answer": "5",
			"question": "Thanks.",
		}, {
			"answer": "4",
			"question": "Go straight.Then turn right at the crossing.",
		}, {
			"answer": "2",
			"question": "Its behind the park.",
		}]
	}, {
		"index": 8,
		"type": "underline",
		"title": "八、按要求完成下列各题。（12分）",
		"titleImg": "abc.jpg",
		"id": "underline1",
		"mp3": "",
		"scores": 12,
		"content": "",
		"data": [{
			"answer": "Where is the museum shop?",
			"question": "1.is, Where, the, shop, museum （?）（连词成句）",
			"underline": ["^_^"],
		}, {
			"answer": "How can we ge there?",
			"question": "2.can, How, get, we, there （?）（连词成句）",
			"underline": ["^_^"],
		}, {
			"answer": "Trrn left at the science museum.",
			"question": "3.at, the, Turn, left, museum, science （.）（连词成句）",
			"underline": ["^_^"],
		}, {
			"answer": "Where is the hospital?",
			"question": "4.The hospital is beside the park.（对画线部分提问）",
			"underline": ["^_^"],
		}, {
			"answer": "Yes,it is.",
			"question": "5.Is it far away from here? （做肯定回答）",
			"underline": ["^_^"],
		}, {
			"answer": "The shop is near the park.",
			"question": "6.The shop is <u>next to</u> the park.（写出近义词）",
			"underline": [" The shop is", "^_^", "the park."],
		}]
	}, {
		"index": 9,
		"type": "choice",
		"title": "九、完形填空。（10分）",
		"titleImg": "abc.jpg",
		"id": "choice2",
		"mp3": "",
		"scores": 10,
		"content": ["Now Amy is at home. She wants to go to the park. She asks a police officer the way.", "<b>Amy:</b>_______._______ can I go to the park?", "<b>Police officer:</b> You can go there by bus.", "<b>Amy:</b> Is it far away _______here?", "<b>Police officer:</b> Yes, it’s far.", "<b>Amy:</b>_______the bus stop?", "<b>Police officer:</b>Turn left_______the cinema and you can see the bus stop on your right.", "<b>Amy:</b>Thank you very much.", "<b>Police officer:</b>That’s OK."],
		"data": [{
			"answer": "B",
			"question": ["1.小题 "],
			"option": ["A.OK", "B.Excuse me", "C.Hello"]
		}, {
			"answer": "A",
			"question": ["2.小题"],
			"option": ["A.How ", "B.What", "C.Where "]
		}, {
			"answer": "C",
			"question": ["3.小题"],
			"option": ["A.beside ", "B.near", "C.from"]
		}, {
			"answer": "A",
			"question": ["4.小题"],
			"option": ["A.Where’s ", "B.What", "C.Why"]
		}, {
			"answer": "C",
			"question": ["5.小题"],
			"option": ["A.for", "B.to", "C.at"]
		}]
	}, {
		"index": 10,
		"type": "choice",
		"title": "十、阅读短文，选择正确的答案。（10分）",
		"titleImg": "abc.jpg",
		"id": "choice2",
		"mp3": "",
		"scores": 10,
		"content": ["Mrs Jones is a teacher. Her house isn’t far away from her school, and she often walks there from Monday to Friday. On Saturday, she often goes to the bookstore to buy some new books. She goes there by bike. She likes reading books very much."],
		"data": [{
			"answer": "B",
			"question": ["（   ）1.Mrs Jones is a ______. "],
			"option": ["A.mother", "B.teacher", "C.worker"]
		}, {
			"answer": "A",
			"question": ["（   ）2.Mrs Jones goes to work ______."],
			"option": ["A.on foot ", "B.by bike", "C.by car "]
		}, {
			"answer": "C",
			"question": ["（   ）3.Mrs Jones usually goes to the ______ on Saturday."],
			"option": ["A.shop ", "B.school", "C.bookstore"]
		}, {
			"answer": "C",
			"question": ["（   ）4.Mrs Jones works ______."],
			"option": ["A.on Sunday ", "B.On Saturday", "C.from Monday to Friday"]
		}, {
			"answer": "A",
			"question": ["（   ）5.Mrs Jones goes to the bookstore______ ."],
			"option": ["A.by bike", "B.by car", "C.on foot"]
		}]
	}, {
		"index": 11,
		"type": "write",
		"title": "十一、小小作文。（9分）",
		"titleImg": "abc.jpg",
		"id": "choice2",
		"mp3": "",
		"scores": 9,
		"content": ["假设你是Oliver，你想去电影院，请你根据所给的路线图写一段与警察叔叔问路的对话。不少于6句。","<img style='display:block;margin:0 auto;' src='img/write-1.jpg'/>"],
		"data": [""]
	}]
}


