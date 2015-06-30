var ketijiexi = (function() {

	var ketijiexi = {};

	ketijiexi.init = function(data) {


		this.arr = data.contents;
		this.titleImg = data.titleImg;
		this.id = data.id;





	};



	ketijiexi.genHtml = function() {

		var html = "<h3 id='" + this.id + "'><img src='" + this.titleImg + "' width='150px'/></h3>";


		for (var i = 0; i < this.arr.length; i++) {


			html += "<p class='chinese'>" + this.arr[i].content + "</p>";


		}





		ketijiexi.html = html;

	};




	return ketijiexi;




})();