var picture = (function($) {
	/**
	 * 空对象
	 */
	var picture = {};
	/**
	 * 初始化
	 * @param {Object} data
	 */
	picture.init = function(data) {
		this.arrImg = data.arrImg;
		this.index1 = 0;
		this.index2 = 0;
		this.title = data.title;
		this.titleImg = data.titleImg;
		this.id=data.id;
	};
	/*
	 * * 鼠标移上
	 */
	picture.mYMouseOver = function(id) {};
	/**
	 * 鼠标移开
	 */
	picture.myMouserOut = function() {};
	/**
	 * 鼠标点击事件
	 */
	picture.myClick = function(id) {

		$("#" + id).toggle();
	};
	/**
	 * 鼠标点击事件
	 */
	picture.showAllImg = function() {



		for (var i = 0; i <= this.arrImg.length; i++) {

			$("#" + "img" + (i + 1) + "action").show();
		};

		//		$("#" + "img" + (this.index1 + 1) + "action").show();
		//		this.index1 += 1;
		//		setTimeout(function() {
		//
		//			picture.showAllImg();
		//
		//		}, 600);
		//
	};

	/**
	 * 隐藏全部
	 */
	picture.hideAllImg = function() {




		for (var i = 0; i <= this.arrImg.length; i++) {

			$("#" + "img" + (i + 1) + "action").hide();
		};



		//			$("#" + "img" + (this.index2 + 1) + "action").hide();
		//			this.index2+=1;
		//			setTimeout(function(){
		//				
		//				picture.hideAllImg();
		//				
		//			},600);
		//			




	};


	/**
	 * 生成图片矩阵的方法
	 */
	picture.gen = function(id) {
		var html = "<h3 id='"+this.id+"'><img src='"+this.titleImg+"' width='150px'/><button class='buttonStyle' onclick='picture.showAllImg()'>显示全部</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='buttonStyle' onclick='picture.hideAllImg()' style='background-color:#f05183'>隐藏全部</button></h3><div class='imgContent'   >";
		for (var i = 0; i < this.arrImg.length; i++) {
			html += "<div class='imgBlock'  onMouseover='picture.mYMouseOver(this.id)' onmouseout='picture.myMouserOut(this.id)'><div class='imgTop'><img src='" + this.arrImg[i].img + "' id='img" + (i + 1 + 'action') + "'/></div><div class='imgTitle'  onclick='picture.myClick(this.id+\"action\")' id='img" + (i + 1) + "' >" + this.arrImg[i].title + "</div></div>";
		}
		html += "</div>";
		$("#" + id).append(html);
	};

	/**
	 * 生成图片矩阵的方法
	 */
	picture.genHtml = function(id) {
		var html = "<h3 id='"+this.id+"'><img src='"+this.titleImg+"' width='150px'/><button class='buttonStyle' onclick='picture.showAllImg()'>显示全部</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='buttonStyle' onclick='picture.hideAllImg()' style='background-color:#f05183'>隐藏全部</button></h3><div class='imgContent'   >";
		for (var i = 0; i < this.arrImg.length; i++) {
			html += "<div class='imgBlock'  onMouseover='picture.mYMouseOver(this.id)' onmouseout='picture.myMouserOut(this.id)'><div class='imgTop'><img src='" + this.arrImg[i].img + "' id='img" + (i + 1 + 'action') + "'/></div><div class='imgTitle'  onclick='picture.myClick(this.id+\"action\")' id='img" + (i + 1) + "' >" + this.arrImg[i].title + "</div></div>";
		}
		html += "</div>";
		picture.html = html;
	};


	return picture;
})(jQuery);

var data = {
	arrImg: [{
		'img': 'img/chinese/tujiexinci_1_001.jpg',
		'title': '炒   菜'
	}, {
		'img': 'img/chinese/tujiexinci_1_002.jpg',
		'title': '锅   勺'
	}, {
		'img': 'img/chinese/tujiexinci_1_003.jpg',
		'title': '书   柜'
	}, {
		'img': 'img/chinese/tujiexinci_1_004.jpg',
		'title': '惧   怕'
	}, {
		'img': 'img/chinese/tujiexinci_1_005.jpg',
		'title': '贪   婪'
	}, {
		'img': 'img/chinese/tujiexinci_1_006.jpg',
		'title': '屋   檐'
	}, {
		'img': 'img/chinese/tujiexinci_1_007.jpg',
		'title': '  碗   '
	}, {
		'img': 'img/chinese/tujiexinci_1_008.jpg',
		'title': '支   撑'
	}, {
		'img': 'img/chinese/tujiexinci_1_009.jpg',
		'title': '唾   沫'
	}]
};