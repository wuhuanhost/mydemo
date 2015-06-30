var meiduzhidao = (function() {



	var meiduzhidao = {};

	meiduzhidao.init = function(data) {



		this.mp3 = data.mp3;
		this.arr = data.contents;
		this.titleImg = data.titleImg;
		this.title = data.title;


	};



	meiduzhidao.genHtml = function() {


		var html = "<h4><img src='"+this.titleImg+"' width='21px'/>"+this.title+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick='playVideo(\"audio-1-1\")'>课文朗读</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style='background-color: #f05183;'onclick='stopVideo(\"audio-1-1\")'>停止朗读</button></h4><audio src='"+this.mp3+"' id='audio-1-2'></audio>";

		var contents = "";



		for (var i = 0; i <this.arr.length; i++) {


			contents += "<p class='chinese'>" + this.arr[i].content + "</p>";



		}



		meiduzhidao.html = html + contents;






	};

















	return meiduzhidao;









})()