var xueximubiao = (function() {

	var xueximubiao = {};

	xueximubiao.init = function(data) {


		this.content = data.content;
		this.titleImg = data.titleImg;
		this.id = data.id;





	};



	xueximubiao.genHtml = function() {

		var html = "<h3 id='" + this.id + "'><img src='" + this.titleImg + "' width='150px'/></h3>";

		


		html += "<p class='chinese'>" + this.content+ "</p>";

		

		xueximubiao.html = html;

	};




	return xueximubiao;




})();