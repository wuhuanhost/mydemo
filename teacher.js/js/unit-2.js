var unit_2 = (function($) {

	var unit_2 = {};


	unit_2.init = function(data) {

		this.jiaoliupingtai = data.jiaoliupingtai;
		this.rijiyuelei = data.rijiyuelei;
		this.quweiyuwen = data.quweiyuwen;



	};

	unit_2.genHtml = function() {

		var html1 = "<h4><img src='" + this.jiaoliupingtai.titleImg + "' width='21px'/>   " + this.jiaoliupingtai.title + "</h4>";

		for (var i = 0; i < this.jiaoliupingtai.contents.length; i++) {


			html1 += "<p>" + this.jiaoliupingtai.contents[i] + "</p>";


		}

		html1 += "<h4><img src='" + this.rijiyuelei.titleImg + "' width='21px'/>   " + this.rijiyuelei.title + "</h4>";

		for (var j = 0; j < this.rijiyuelei.contents.length; j++) {


			html1 += "<p>" + this.rijiyuelei.contents[j] + "</p>";


		}

		html1 += "<h4><img src='" + this.quweiyuwen.titleImg + "' width='21px'/>   " + this.quweiyuwen.title + "</h4>";

		for (var k = 0; k < this.quweiyuwen.contents.length; k++) {


			html1 += "<p>" + this.quweiyuwen.contents[k] + "</p>";


		}


		$("body").append(html1);


	};

	return unit_2;

})(jQuery);


var data = {

	"jiaoliupingtai": {
		"title": "交流平台",
		"titleImg": "img/chinese/icon_meiduzhidao.jpg",
		"contents": ["温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~"]
	},
	"rijiyuelei": {
		"title": "日积月累",
		"titleImg": "img/chinese/icon_meiduzhidao.jpg",
		"contents": ["温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~"]
	},
	"quweiyuwen": {
		"title": "趣味语文",
		"titleImg": "img/chinese/icon_meiduzhidao.jpg",
		"contents": ["温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~温故而知新~"]
	}




};