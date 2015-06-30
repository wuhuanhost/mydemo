var unit_1 = (function($) {

	var unit_1 = {};


	unit_1.init = function(data) {

		console.log(data);

		this.kouyujiaojiImg = data.kouyujiaoji.titleImg;
		this.jiaojizhidao = data.kouyujiaoji.jiaojizhidao;
		this.jiaojiliwen = data.kouyujiaoji.jiaojiliwen;

		//this.xizuoizhidaoImg= data.xiezuozhidao.titleImg;
		this.xiezuozhidao = data.xizuozhidao.xiezuozhidao;
		this.xizuoliwen = data.xizuozhidao.xizuoliwen;
		this.mishidianping = data.xizuozhidao.mingshidianping;



	};

	unit_1.genHtml = function() {

		//口语交际
		var html1 = "<h3><img  src='" + this.kouyujiaojiImg + "'/></h3>";

		html1 += "<h4><img src='" + this.jiaojizhidao.titleImg + "' width='21px'/>   " + this.jiaojizhidao.title + "</h4>";

		for (var i = 0; i < this.jiaojizhidao.contents.length; i++) {


			html1 += "<p>" + this.jiaojizhidao.contents[i] + "</p>";


		}

		html1 += "<h4><img src='" + this.jiaojiliwen.titleImg + "' width='21px'/>   " + this.jiaojiliwen.title + "</h4>";

		for (var j = 0; j < this.jiaojiliwen.contents.length; j++) {


			html1 += "<p>" + this.jiaojiliwen.contents[j] + "</p>";


		}

		//习作指导
		var html2 = "<h3><img  src='" + this.xizuozhidaoImg + "'/></h3>";


		html2 += "<h4><img src='" + this.xiezuozhidao.titleImg + "' width='21px'/>   " + this.xiezuozhidao.title + "</h4>";

		html2 += "<p>";
		for (var k = 0; k < this.xiezuozhidao.contents.length; k++) {


			html2 += this.xiezuozhidao.contents[k];


		}
		html2 += "</p>";


		html2 += "<h4><img src='" + this.xizuoliwen.titleImg + "' width='21px'/>   " + this.xizuoliwen.title + "</h4>";

		for (var l = 0; l < this.xizuoliwen.contents.length; l++) {


			html2 += "<p>" + this.xizuoliwen.contents[l] + "</p>";


		}

		html2 += "<h4><img src='" + this.mishidianping.titleImg + "' width='21px'/>   " + this.mishidianping.title + "</h4>";


		for (var m = 0; m < this.mishidianping.contents.length; m++) {


			html2 += "<p>" + this.mishidianping.contents[m] + "</p>";


		}



		$("body").append(html1 + html2);


	};

	return unit_1;


})(jQuery);




var data = {
	"kouyujiaoji": {
		"titleImg": "img/chinese/title_kouyujiaoji.jpg",
		"title": "口语交际",
		"jiaojizhidao": {
			"title": "交际指导",
			"titleImg": "img/chinese/icon_meiduzhidao.jpg",
			"contents": ["教材中提供了三个可选择的活动角度"]
		},
		"jiaojiliwen": {
			"title": "交际例文",
			"titleImg": "img/chinese/icon_meiduzhidao.jpg",
			"contents": ["<label>-不动笔墨不看图书</label>", "几十年来，毛主席每读一本书，一篇文章，都在重要的地方画上"]
		}
	},
	"xizuozhidao": {
		"titleImg": "six.jpg",
		"title": "口语交际",
		"xiezuozhidao": {
			"title": "写作指导",
			"titleImg": "img/chinese/icon_meiduzhidao.jpg",
			"contents": ["<span class='xiezuozhidao'>我爱我的字典朋友:   </span>在我的书柜里住着我的好朋友在我的书柜里住着我的好朋友在我的书柜里住着我的好朋友在我的书柜里住着我的好朋友在我的书柜里住着我的好朋友，","<br/><img src='img/chinese/icon_meiduzhidao.jpg'/>"]

		},
		"xizuoliwen": {
			"title": "习作例文",
			"titleImg": "img/chinese/icon_meiduzhidao.jpg",
			"contents": ["<label>我爱我的字典朋友</label>", "在我的书柜里住着我的好朋友，"]

		},
		"mingshidianping": {
			"title": "名师点评",
			"titleImg": "img/chinese/icon_meiduzhidao.jpg",
			"contents": ["文章是从两个方面来写字典的.........."]
		}


	}




};