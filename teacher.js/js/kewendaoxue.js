var kewendaoxue = (function() {



	var kewendaoxue = {};

	kewendaoxue.init = function(data) {

		this.arr = data.contents;
		this.titleImg = data.titleImg;
		this.title = data.title;


	};



	kewendaoxue.genHtml = function() {


		var html = "<h4><img src='"+this.titleImg+"' width='21px'/>"+this.title+"</h4>";

		var contents = "";



		for (var i = 0; i <this.arr.length; i++) {


			contents += "<p class='chinese'>" + this.arr[i].content + "</p>";



		}



		kewendaoxue.html = html + contents;






	};

















	return kewendaoxue;









})()