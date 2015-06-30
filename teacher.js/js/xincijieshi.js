var xcjs = (function($) {






	var xcjs = {};

	xcjs.init = function(data) {

		this.arr = data.contents;
		this.titleImg = data.titleImg;
		this.title = data.title;

	}

	xcjs.myClick = function(id, dom) {



		if ($(dom).html() == "查看解释") {
			$("#" + id).show();
			$(dom).html("隐藏解释");
			$(dom).css("background-color", "#f05183");
		} else {
			$("#" + id).hide();
			$(dom).html("查看解释");
			$(dom).css("background-color", "#0095d9");
		}

	};

	xcjs.showAllOption = function() {



		for (var i = 0; i < this.arr.length; i++) {

			$("#" + i + '-xcjs').show();
			$("#" + i + '-xcjs-button').html("隐藏解释");
			$("#" + i + '-xcjs-button').css("background-color", "#f05183");

		}


	};

	xcjs.hideAllOption = function() {


		for (var i = 0; i < this.arr.length; i++) {
			$("#" + i + '-xcjs').hide();
			$("#" + i + '-xcjs-button').html("查看解释");
			$("#" + i + '-xcjs-button').css("background-color", "#0095d9");

		}


	};


	xcjs.genHtmls = function() {


		var html = "";

		for (var i = 0; i < this.arr.length; i++) {


			html += "<p><label style='font-weight:bold;'>" + this.arr[i].question + ":</label>    <label style='display:none;' id='" + i + "-xcjs'>" + this.arr[i].answer + "</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=xcjs.myClick('" + i + "-xcjs',this) id='" + i + "-xcjs-button'>查看解释</button></p>";


		}
		xcjs.html = "";
		xcjs.html = "<h4><img src='" + this.titleImg + "' width='21px'/>" + this.title + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button  onclick='xcjs.showAllOption()'>显示全部</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick='xcjs.hideAllOption()' style='background-color:#f05183'>隐藏全部</button></h3>" + html;

	};


	xcjs.genHtml = function(id) {


		var html = "";

		for (var i = 0; i < this.arr.length; i++) {


			html += "<p><label style='font-weight:bold;'>" + this.arr[i].question + ":</label>    <label style='display:none;' id='" + i + "-xcjs'>" + this.arr[i].answer + "</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=xcjs.myClick('" + i + "-xcjs',this) id='" + i + "-xcjs-button'>查看解释</button></p>";


		}

		$("#" + id).append("<h4><img src='img/chinese/icon_xincijieshi.jpg' width='21px'/>新词解释&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button  onclick='xcjs.showAllOption()'>显示全部</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick='xcjs.hideAllOption()' style='background-color:#f05183'>隐藏全部</button></h3>" + html);

	};

	return xcjs;


})(jQuery);


var objectData = {



	'titleImg': '../img/chinese/icon_xincijieshi.jpg',
	'title': '新词解释',
	'contents': [{
		'question': '招牌',
		'answer': '商店的字号标志'
	}]


	//	arr: [{
	//		'new': '招牌',
	//		'jieshi': '商店的字号标志，也比喻某种名义或称号。'
	//	}, {
	//		'new': '贪婪',
	//		'jieshi': '贪得无厌;渴求而不知满足。'
	//	}, {
	//		'new': '适宜',
	//		'jieshi': '适合;相宜。'
	//	}, {
	//		'new': '知趣',
	//		'jieshi': '知道进退，不惹人讨厌。'
	//	}, {
	//		'new': '光顾',
	//		'jieshi': '敬辞，称客人来到，商家多用来欢迎顾客。'
	//	}, {
	//		'new': '交替',
	//		'jieshi': '①接替。②替换着;轮流。本文取①义。'
	//	}, {
	//		'new': '白日梦',
	//		'jieshi': '比喻不能实现的胡思乱想。'
	//	}, {
	//		'new': '倾盆大雨',
	//		'jieshi': '雨大得像盆里的水直往下倒。形容雨大势急。'
	//	}, {
	//		'new': '饥肠辘辘',
	//		'jieshi': '形容非常饥饿。'
	//	}, {
	//		'new': '依依不舍',
	//		'jieshi': '形容舍不得离开。'
	//	}]



};