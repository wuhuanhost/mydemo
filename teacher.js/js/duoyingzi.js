var duoyingzi = (function() {
	var duoyingzi = {};



	duoyingzi.init = function(data) {
		this.img = data.img;
		this.titleImg = data.titleImg;
		this.title = data.title;

	};

	duoyingzi.genHtml = function() {


		var html = "<h4><img src='" + this.titleImg + "' width='21px'/>" + this.title + "</h3><img src='" + this.img + "' style='margin-top:10px;'/>";

		duoyingzi.html = html;


	};




	return duoyingzi;


})();