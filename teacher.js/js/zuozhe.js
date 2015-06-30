var zuozhe = (function($) {

	var zuozhe = {};


	zuozhe.init = function(data) {
		

		this.titleImg = data.titleImg;
		this.title = data.title;
		this.contents = data.contents;
		this.id=data.id;
		
		
	};


	zuozhe.genHtml = function() {
		var html = "<h3 id='"+this.id+"'><img src='" + this.titleImg + "' width='150px'/></h3>";

		for (var i = 0; i < this.contents.length; i++) {

			html += "<p class='chinese' style='width:600px;float:left;height:90px'>" + this.contents[i].content + "</p><p class='chinese' style='width:100px;float:left;height:90px;margin-left:10px;'><img src='" + this.contents[i].autherImg + "' alt='' /></p><div class='clean'></div>";



		}


		zuozhe.html = html;

	}


	return zuozhe;

})(jQuery);

