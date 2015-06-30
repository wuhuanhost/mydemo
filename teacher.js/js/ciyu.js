/**
 *近义词
 */
var ciyu = (function($) {

	var ciyu = {};

	ciyu.init = function(data) {

		this.arr = data.contents;
		this.titleImg = data.titleImg;
		this.title = data.title;

	}

	ciyu.myClick = function(id) {


		$("#" + id).toggle();

	};

	ciyu.showAllOption = function() {



		for (var i = 0; i < this.arr.length; i++) {

			$("#" + i + '-jingyici').show();
			$("#" + i + '-jingyici-button').html("隐藏解释");
			$("#" + i + '-jingyici-button').css("background-color", "#f05183");

		}


	};

	ciyu.hideAllOption = function() {


		for (var i = 0; i < this.arr.length; i++) {
			$("#" + i + '-jingyici').hide();
			$("#" + i + '-jingyici-button').html("查看解释");
			$("#" + i + '-jingyici-button').css("background-color", "#0095d9");

		}


	};


	ciyu.genHtmls = function(id) {


		var html = "";

		for (var i = 0; i < this.arr.length; i++) {


			html += "<span><a onclick=ciyu.myClick('" + i + "-jingyici') style='cursor:pointer;'>" + this.arr[i].question + "</a>——<label style='display:none;' id='" + i + "-jingyici'>" + this.arr[i].answer + "</label></span>";


		}
		ciyu.html = "";
		ciyu.html += "<h4><img src='" + this.titleImg + "' width='21px'/>" + this.title + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button  onclick='ciyu.showAllOption()'>显示全部</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick='ciyu.hideAllOption()' style='background-color:#f05183'>隐藏全部</button></h3><br/><div class='word' style='background-color: #FCD7DA;'>" + html + "</div><div style='clear:both'></div>";

	};


	ciyu.genHtml = function(id) {


		var html = "";

		for (var i = 0; i < this.arr.length; i++) {


			html += "<span><a onclick=ciyu.myClick('" + i + "-jingyici') style='cursor:pointer;'>" + this.arr[i].question + "</a>——<label style='display:none;' id='" + i + "-jingyici'>" + this.arr[i].answer + "</label></span>";


		}

		$("#" + id).append("<h4><img src='img/chinese/icon_jinyici.jpg' width='21px'/>近义词&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button  onclick='ciyu.showAllOption()'>显示全部</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick='ciyu.hideAllOption()' style='background-color:#f05183'>隐藏全部</button></h3><br/><div class='word' style='background-color: #FCD7DA;'>" + html + "</div>");

	};

	return ciyu;


})(jQuery);


var objectDatas = {


	'titleImg': '../img/chinese/icon_jinyici.jpg',
	'title': '新词解释',
	'contents': [{
		'question': '招牌',
		'answer': '商店的字号标志'
	}]



	//	arr: [{
	//		'word': '贪婪',
	//		'jingfanyici': '贪心'
	//	}, {
	//		'word': '惧怕',
	//		'jingfanyici': '害怕'
	//	}, {
	//		'word': '担忧',
	//		'jingfanyici': '担心'
	//	}, {
	//		'word': '鼓励',
	//		'jingfanyici': '勉励'
	//	}, {
	//		'word': '急切',
	//		'jingfanyici': '迫切'
	//	}, {
	//		'word': '适宜',
	//		'jingfanyici': '适合'
	//	}, {
	//		'word': '依依不舍',
	//		'jingfanyici': '恋恋不舍'
	//	}]



};