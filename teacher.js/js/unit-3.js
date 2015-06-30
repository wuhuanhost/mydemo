var unit_3 = (function($) {

	var unit_3 = {};


	unit_3.init = function(data) {

		this.one = data.one;
		this.two = data.two;
		this.three = data.three;
		this.four = data.four;
		this.five = data.five;
		this.six = data.six;
	};

	unit_3.genHtml = function() {

		var html1 = "<h4><img src='" + this.one.titleImg + "' width='21px'/>   " + this.one.title + "</h4>";

		for (var i = 0; i < this.one.contents.length; i++) {


			html1 += "<p>" + this.one.contents[i] + "</p>";

		}

		html1 += "<h4><img src='" + this.two.titleImg + "' width='21px'/>   " + this.two.title + "</h4><img src='" + this.two.img + "'/>";



		html1 += "<h4><img src='" + this.three.titleImg + "' width='21px'/>   " + this.three.title + "</h4>";

		for (var j = 0; j < this.three.contents.length; j++) {

			html1 += "<p>" + this.three.contents[j] + "</p>";

		}

		html1 += "<h4><img src='" + this.four.titleImg + "' width='21px'/>   " + this.four.title + "</h4>";

		for (var k = 0; k < this.four.contents.length; k++) {

			html1 += "<p>" + this.four.contents[k] + "</p>";

		}
		
		html1 += "<h4><img src='" + this.five.titleImg + "' width='21px'/>   " + this.five.title + "</h4>";

		for (var l = 0; l < this.five.contents.length; l++) {

			html1 += "<p>" + this.five.contents[l] + "</p><p style='display:block;width:600px;height:20px;border-bottom: 1px solid blue;margin-left:40px;'></p>";


		}
		html1 += "<h4><img src='" + this.six.titleImg + "' width='21px'/>   " + this.six.title + "</h4>";

		for (var m = 0; m < this.six.contents.length; m++) {

			html1 += "<p>" + this.six.contents[m] + "</p>";


		}



		$("body").append(html1);


	};

	return unit_3;

})(jQuery);


var data = {

	"one": {
		"title": "一、背诵与默写",
		"titleImg": "img/chinese/icon_meiduzhidao.jpg",
		"contents": ["1、背诵第三课第七自然段", "2、默写", "一日无书，百事荒芜（陈寿）", "读书破万卷，下笔如有神（杜甫）", "书犹药也，善读之可以医愚（刘向）", "黑发不知勤学早，白首方悔读书恨（颜真卿）", "读书有三到，谓心到，眼到，手到（朱熹）"]
	},
	"two": {
		"title": "二、多音字组词",
		"titleImg": "img/chinese/icon_meiduzhidao.jpg",
		"img": "img/chinese/danyuanfuxi.jpg"
	},
	"three": {
		"title": "三、词语乐园",
		"titleImg": "img/chinese/icon_meiduzhidao.jpg",
		"contents": ["1、重点词语", "招牌   担忧   急切   惧怕  环境  知趣", "2、在括号里填上合适的词", "（美丽）的图画   （浩瀚）的土地", "3、特殊词语", "ABB式：急匆匆   沉甸甸"]
	},
	"four": {
		"title": "四、佳句积累",
		"titleImg": "img/chinese/icon_meiduzhidao.jpg",
		"contents": ["1、比喻句", "（1）急忙打开书，一页，两页，我像一匹饿狼，贪婪的地读着。"]
	},
	"five": {
		"title": "五、句子训练",
		"titleImg": "img/chinese/icon_meiduzhidao.jpg",
		"contents": ["1、我悟出一点道理，真情实感离不开作文（修改句中的错误）","2、我像一匹饿狼，贪婪地读着（仿写句子）","3、你不会因为以前见过你的朋友就不愿在见到他们了吧？（改为陈述句）","4、读书很惬意（改为陈述句）"]
	},
	"six": {
		"title": "六、单元考点",
		"titleImg": "img/chinese/icon_meiduzhidao.jpg",
		"contents": ["1、第二课题目的含义本单元文章的体裁以填空形式考察","2、第一课第4自然段和第三课第4自然段常以课内阅读的形式出现","3、口语交际的作文常常考察“我和书的故事”"]
	}




};