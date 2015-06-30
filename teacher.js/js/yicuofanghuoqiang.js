var yicuofanghuoqiang = (function() {



	var yicuofanghuoqiang = {};

	yicuofanghuoqiang.init = function(data) {

		this.title = data.title;
		this.titleImg = data.titleImg;
		this.id = data.id;
		this.img = data.img;


	};



	yicuofanghuoqiang.genHtml = function() {

		var html = "<div class='clean'></div><br/><br/><br/><h3 id='" + this.id + "'><img src='" + this.titleImg + "' width='150px'/></h3><img src='" + this.img + "' style='margin-top:10px;'/>";

		yicuofanghuoqiang.html = html;
		
	}





	return yicuofanghuoqiang;



})();