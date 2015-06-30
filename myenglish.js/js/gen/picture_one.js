var po = (function() {

	var po = {};

	//初始化方法
	po.init = function(data) {
		this.index = data.index;
		this.type = data.type;
		this.title = data.title;
		this.titleImg = data.titleImg;
		this.id = data.id;
		this.mp3 = data.mp3;
		this.content = data.content;
		this.data = data.data;
		this.scores = data.scores / data.data.length; //每个小题的分数
		po.genHtml(this.scores);
	};
	//json转换
	po.resolveJson = function() {

	};
	po.inputClick = function(dom) {

		if ($(dom).attr("readonly") == "readonly") {

			alert("请先点击开始答题按钮，然后开始作答！");
		} else {

			$(dom).css("border-bottom", "1px solid #f05183");
			$(dom).onfocus;
		}
	};
	
	
	

	po.blur = function(dom) {

		var idArr = dom.id.split("-");



		if ($(dom).val() != "") {

			$(dom).css("border-bottom", "1px solid #388c43");

			$("#" + idArr[0] +"-"+ idArr[1] + "-progress").css("background-color", "#227218");


			





		} else {
			$("#" + idArr[0] +"-"+ idArr[1] + "-progress").css("background-color", "#cd3605");

			$(dom).css("border-bottom", "1px solid #999999");
		}




	};
	//生成html的方法
	po.genHtml = function(scores) {

		titles.init(this.title, this.titleImg, this.id, this.mp3, this.index);

		titles.genHtml();

		var t = titles.html;

		var html = t + "<div class='class1' id='" + this.id + "'>";

		for (var i = 0; i < this.data.length; i++) {

			html += "<div class ='class1-div' id='"+this.index+"-"+(i+1)+"'><div class='img_div'><img src ='" + this.data[i].img + "'alt = ' '/ ></div><div id='" + this.index + "-" + (i + 1) + "-" + this.scores + "' class='answer_memory-" + (this.index - 1) + "'><input type='hidden' name='' id='" + this.index + "-" + (i + 1) + "-" + (scores) + "-a' value='" + this.data[i].answer + "'/><input type = 'text' name ='' id='" + this.index + "-" + (i + 1) + "-" + scores + "-b' value =''  readonly='readonly'  onclick='po.inputClick(this)' onblur='po.blur(this)'/></div></div>";

		}
		po.html = html + "<div class='clear'></div></div>";

		//console.log(html);

	};

	return po;

})();


//var data = {
//	"type": "picture-one",
//	"title": "听录音，选出你听到的单词或短语",
//	"titleImg": "abc.jpg",
//	"id": "ting-picture",
//	"mp3": "ting-1.mp3",
//	"content": "",
//	"data": [{
//		"img": "img/1-1.jpg",
//		"answer": "1",
//	}, {
//		"img": "img/1-2.jpg",
//		"answer": "2",
//	}, {
//		"img": "img/1-3.jpg",
//		"answer": "3",
//	}, {
//		"img": "img/1-4.jpg",
//		"answer": "4",
//	}, {
//		"img": "img/1-5.jpg",
//		"answer": "5",
//	}]
//}