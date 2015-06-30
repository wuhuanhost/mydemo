var ciyujijing = (function() {

	var ciyujijing = {};

	ciyujijing.init = function(data) {


		this.xincijieshi = data.xincijieshi;
		this.jingyici = data.jinyici;
		this.fanyici = data.fanyici;
		this.duoyingzi = data.duoyinzizuci;
		this.jingyicibianxi = data.jinyicibianxi;
		this.tingxieleyuan = data.tingxieleyuan;
		this.meiduzhidao = data.meiduzhidao;
		this.kewendaoxue = data.kewendaoxue;
		ciyujijing.html = "";
		ciyujijing.html += "<h3 id='"+data.id+"'><img src='" + data.titleImg + "' width='150px'/></h3>";

	};

	//新词解释
	ciyujijing.fun_xincijieshi = function() {



		xcjs.init(this.xincijieshi);
		xcjs.genHtmls();
		ciyujijing.html += xcjs.html;

	};

	//近义词
	ciyujijing.fun_jingyici = function() {

		ciyu.init(this.jingyici);
		ciyu.genHtmls();
		ciyujijing.html += ciyu.html;

	};


	//反义词
	ciyujijing.fun_fanyici = function() {

		fanyici.init(this.fanyici);
		fanyici.genHtmls();
		ciyujijing.html += fanyici.html;




	};

	//多音字
	ciyujijing.fun_duoyingzi = function() {

		duoyingzi.init(this.duoyingzi);
		duoyingzi.genHtml();
		ciyujijing.html += duoyingzi.html;

	};



	//近义词辨析
	ciyujijing.fun_jingyicibianxi = function() {

		jingyicibianxi.init(this.jingyicibianxi);
		jingyicibianxi.genHtml();
		ciyujijing.html += jingyicibianxi.html;

	};

	//听写乐园
	ciyujijing.fun_tingxieleyuan = function() {

		tingxieleyuan.init(this.tingxieleyuan);
		tingxieleyuan.genHtml();
		ciyujijing.html += tingxieleyuan.html;


	}


	//美读指导
	ciyujijing.fun_meiduzhidao = function() {

		meiduzhidao.init(this.meiduzhidao);
		meiduzhidao.genHtml();
		ciyujijing.html += meiduzhidao.html;



	}


	//课文导学

	ciyujijing.fun_kewendaoxue = function() {


		kewendaoxue.init(this.kewendaoxue);
		kewendaoxue.genHtml();
		ciyujijing.html += kewendaoxue.html;



	}


	//测试
	ciyujijing.test = function() {
		ciyujijing.fun_xincijieshi();
		ciyujijing.fun_jingyici();
		ciyujijing.fun_fanyici();
		ciyujijing.fun_duoyingzi();
		ciyujijing.fun_jingyicibianxi();
		//ciyujijing.fun_tingxieleyuan();
		ciyujijing.fun_meiduzhidao();
		ciyujijing.fun_kewendaoxue();
	}




	return ciyujijing;












})();



var data = {
	"title": "词语集锦",
	"titleImg": "img/title_ciyujijin.jpg",
	"xincijieshi": {
		"title": "新词解释",
		"titleImg": "img/icon_xincijieshi.jpg",
		"contents": [{
			"question": "招牌",
			"answer": "商店的字号标志，也比喻某种名义或称号。"
		}, {
			"question": "贪婪",
			"answer": "贪得无厌;渴求而不知满足。"
		}, {
			"question": "适宜",
			"answer": "适合;相宜。"
		}, {
			"question": "知趣",
			"answer": "知道进退，不惹人讨厌。"
		}, {
			"question": "光顾",
			"answer": "敬辞，称客人来到，商家多用来欢迎顾客。"
		}, {
			"question": "交替",
			"answer": "①接替。②替换着;轮流。本文取①义。"
		}, {
			"question": "白日梦",
			"answer": "比喻不能实现的胡思乱想。"
		}, {
			"question": "倾盆大雨",
			"answer": "雨大得像盆里的水直往下倒。形容雨大势急。"
		}, {
			"question": "饥肠辘辘",
			"answer": "形容非常饥饿。"
		}, {
			"question": "依依不舍",
			"answer": "形容舍不得离开。"
		}]
	},
	"jinyici": {
		"title": "近义词",
		"titleImg": "img/icon_jinyici.jpg",
		"contents": [{
			"question": "贪婪",
			"answer": "贪心"
		}, {
			"question": "惧怕",
			"answer": "害怕"
		}, {
			"question": "担忧",
			"answer": "担心"
		}, {
			"question": "鼓励",
			"answer": "勉励"
		}, {
			"question": "急切",
			"answer": "迫切"
		}, {
			"question": "适宜",
			"answer": "适合"
		}, {
			"question": "依依不舍",
			"answer": "恋恋不舍"
		}]
	},
	"fanyici": {
		"title": "反义词",
		"titleImg": "img/icon_fanyici.jpg",
		"contents": [{
			"question": "隐藏",
			"answer": "暴露"
		}, {
			"question": "轻松",
			"answer": "沉重"
		}, {
			"question": "担忧",
			"answer": "放心"
		}, {
			"question": "惧怕",
			"answer": "无畏"
		}, {
			"question": "贪婪",
			"answer": "知足"
		}, {
			"question": "暂时",
			"answer": "长久"
		}, {
			"question": "急切",
			"answer": "从容"
		}]
	},
	"duoyinzizuci": {
		"title": "多音字组词",
		"titleImg": "img/icon_duoyincizu.jpg",
		"img": "img/duoyinzi_1_001.jpg"
	},
	"jinyicibianxi": {
		"title": "近义词辨析",
		"titleImg": "img/icon_jinyicibianxi.jpg",
		"contents": [{
			"company1": "担忧",
			"company2": "担心",
			"xiangtong": "这两个词都含有不放心的意思。",
			"butong": "“担忧”一词所表现的程度比“担心”要深，语意更重。",
			"zaoju": "1.我【担忧】那本书会不会卖光。<br/>2.天黑了，女儿还没回家，妈妈十分【担心】。"
		}]
	},
	"tingxieleyuan": {
		"title": "听写乐园",
		"titleImg": "img/icon_tingxieleyuan.jpg",
		"mp3": "mp3/tingxieleyuan",
		"img": "img/tingxieleyuan_1_001.jpg"
	},
	"meiduzhidao": {
		"title": "美读指导",
		"titleImg": "img/icon_meiduzhidao.jpg",
		"mp3": "mp3/meiduzhidao",
		"contents": [{
			"content": "朗读这篇课文，要抓住“我”的心情变化。如与书相逢的惊喜、匆忙窃读的快乐与惧怕、雨天读书的开心、与书相别的留恋与满足……朗读时，入情入境才能读出感情，读出作者真实的感受。如“最令人开心的/是下雨天，越是倾盆大雨/我越高兴，因为那时/我便有充足的理由/在书店待下去。就像在屋檐下躲雨，你总不好意思/赶我走吧？”"
		}]
	},
	"kewendaoxue": {
		"title": "课文导学",
		"titleImg": "img/icon_kewendaoxue.jpg",
		"contents": [{
			"content": "初读课文时思考：作者窃读的滋味有哪些？从哪些地方可以看出“我”的惧怕与快乐？ 再读课文时，要抓住课文的线索一一“窃读”，通过作者的内心活动，体会作者窃读时的真实情感。"
		}]
	}
};