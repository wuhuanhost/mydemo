/**
 *近义词
 */
var fanyici = (function($) {

	var fanyici = {};

	fanyici.init = function(data) {
		this.arr = data.contents;
		this.titleImg = data.titleImg;
		this.title = data.title;

	}

	fanyici.myClick = function(id) {


		$("#" + id).toggle();

	};

	fanyici.showAllOption = function() {



		for (var i = 0; i < this.arr.length; i++) {

			$("#" + i + '-fanyici').show();
			$("#" + i + '-fanyici-button').html("隐藏解释");
			$("#" + i + '-fanyici-button').css("background-color", "#f05183");

		}


	};

	fanyici.hideAllOption = function() {


		for (var i = 0; i < this.arr.length; i++) {
			$("#" + i + '-fanyici').hide();
			$("#" + i + '-fanyici-button').html("查看解释");
			$("#" + i + '-fanyici-button').css("background-color", "#0095d9");

		}


	};


	fanyici.genHtmls = function(id) {


		var html = "";

		for (var i = 0; i < this.arr.length; i++) {

			html += "<span><a onclick=fanyici.myClick('" + i + "-fanyici') style='cursor:pointer;'>" + this.arr[i].question + "</a>——<label style='display:none;' id='" + i + "-fanyici'>" + this.arr[i].answer + "</label></span>";

		}

		fanyici.html = "<h4><img src='" + this.titleImg + "' width='21px'/>" + this.title + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button  onclick='fanyici.showAllOption()'>显示全部</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick='fanyici.hideAllOption()' style='background-color:#f05183'>隐藏全部</button></h3><br/><div class='word' style='background-color: #D5EFFC;'>" + html + "</div><div style='clear:both'></div>";

	};


	fanyici.genHtml = function(id) {


		var html = "";

		for (var i = 0; i < this.arr.length; i++) {


			html += "<span><a onclick=fanyici.myClick('" + i + "-fanyici') style='cursor:pointer;'>" + this.arr[i].question + "</a>——<label style='display:none;' id='" + i + "-fanyici'>" + this.arr[i].answer + "</label></span>";


		}

		$("#" + id).append("<h4><img src='img/chinese/icon_jinyici.jpg' width='21px'/>反义词&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button  onclick='fanyici.showAllOption()'>显示全部</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick='fanyici.hideAllOption()' style='background-color:#f05183'>隐藏全部</button></h3><br/><div class='word' style='background-color: #D5EFFC;'>" + html + "</div>");

	};

	return fanyici;


})(jQuery);


var objectDatass = {

	'titleImg': '../img/chinese/icon_jinyici.jpg',
	'title': '新词解释',
	'contents': [{
		'question': '招牌',
		'answer': '商店的字号标志'
	}]


	//	arr: [{
	//		'word': '隐藏',
	//		'jingfanyici': '暴露'
	//	}, {
	//		'word': '轻松',
	//		'jingfanyici': '沉重'
	//	}, {
	//		'word': '担忧',
	//		'jingfanyici': '放心'
	//	}, {
	//		'word': '惧怕',
	//		'jingfanyici': '无畏'
	//	}, {
	//		'word': '贪婪',
	//		'jingfanyici': '知足'
	//	}, {
	//		'word': '暂时',
	//		'jingfanyici': '长久'
	//	}, {
	//		'word': '急切',
	//		'jingfanyici': '从容'
	//	}]



};