var shengziquanxi = (function() {

	var shengziquanxi = {};

	shengziquanxi.init = function(data) {


		this.titleImg = data.titleImg;
		this.title = data.title;
		this.oneData = data.one;
		this.twoData = data.two;
		this.id = data.id;

	};

	shengziquanxi.genHtml = function() {

		var html = "<h3 id='" + this.id + "'><img src='" + this.titleImg + "' width='150px'/></h3>";

		var one = "";

		if (this.oneData != null) {




			one = "<h4><img src='" + this.oneData.titleImg + "' width='21px'/>" + this.oneData.title + "</h3>";

			for (var i = 0; i < this.oneData.contents.length; i++) {

				one += "<img src='" + this.oneData.contents[i].imgSrc + "' style='margin-top:10px;' id='" + this.oneData.contents[i].imgSrc + "'/><button style='color:#FFFFFF' onclick=showBtn('" + this.oneData.contents[i].flashSrc + "')>查看汉字</button>";

			}

		}

		var two = "";
		var ul = "";
		if (this.twoData != null) {



			two = "<h4><img src='" + this.twoData.titleImg + "' width='21px'/>" + this.twoData.title + "</h3>";

			ul = "<ul>";
			for (var j = 0; j < this.twoData.contents.length; j++) {
				ul += "<li><img src='" + this.twoData.contents[j].imgSrc + "' alt='' /></li>"
			}
			ul += "</ul>";
			two += ul;
		}
		shengziquanxi.html = html + one + two + "<br/><br/><br/>";

	};


	return shengziquanxi;

})();

var data = {
	'one': {
		'titleImg': '../img/chinese/icon_huixiedezi.jpg',
		'title': '课标要求掌握的字',
		'contents': [{
			'imgSrc': '../img/chinese/shengziquanxi_1_001.jpg',
			'flashSrc': 'zi.swf'
		}]
	},
	'two': {
		'titleImg': '../img/chinese/icon_huirendezi.jpg',
		'title': '课标要求会写的字',
		'contents': [{
			'imgSrc': '../img/chinese/shengziquanxi_1_015.jpg',
			'flashSrc': 'swf/zi.swf'
		}, {
			'imgSrc': '../img/chinese/shengziquanxi_1_015.jpg',
			'flashSrc': 'swf/zi.swf'
		}, {
			'imgSrc': '../img/chinese/shengziquanxi_1_015.jpg',
			'flashSrc': 'swf/zi.swf'
		}]
	},
	'titleImg': '../img/c-title-05.jpg',
	'title': '标题 '
}