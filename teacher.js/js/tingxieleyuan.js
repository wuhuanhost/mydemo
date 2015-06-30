var tingxieleyuan = (function() {

	var tingxieleyuan = {};



	tingxieleyuan.init = function(data) {

		this.mp3 = data.mp3;
		this.img = data.img;
		this.titleImg = data.titleImg;
		this.title = data.title;
		this.arr = data.contents;


	};


	//循环播放
	tingxieleyuan.loop = function() {
		var cur = 1;
		$("#audio-123")[0].src = tingxieleyuan.loops[cur];
		$("#audio-123")[0].load();
		$("#audio-123")[0].play();

		setInterval(function() {
			console.log(cur + "   " + tingxieleyuan.loops[cur]);

			if ($("#audio-123")[0].ended == true) {
				cur += 1;
				$("#audio-123")[0].src = tingxieleyuan.loops[cur];
				$("#audio-123")[0].load();
				$("#audio-123")[0].play();
			}
		}, 1000);
	};

	//点击播放
	tingxieleyuan.myclick = function(src) {

		$("#audio-123")[0].src = src;
		$("#audio-123")[0].load();
		$("#audio-123")[0].play();
	};

	tingxieleyuan.genHtml = function() {

		tingxieleyuan.loops = [];
		
		var html = "<h4><audio  id='audio-123'/><img src='" + this.titleImg + "' width='21px'/>" + this.title + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick='tingxieleyuan.loop()'>播放音频</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style='background-color: #f05183;'onclick='stopVideo(\"audio-1-2\")'>停止播放</button></h3><audio src='" + this.mp3 + "' id='audio-1-2'></audio><img src='" + this.img + "' style='margin-top:10px;'/><br/>";
		
		for (var i = 1; i <= this.arr.length; i++) {

			if (i % 4 == 0) {
				
				html += "&nbsp;&nbsp;&nbsp;<label style='width:100px;displayinline-block;line-height:30px;cursor:pointer;' onclick='tingxieleyuan.myclick(\"" + this.arr[i - 1].mp3 + "\")'>" + this.arr[i - 1].wenzi + "</label><br/>";

			} else {

				html += "&nbsp;&nbsp;&nbsp;<label style='width:100px;display:inline-block;line-height:30px;cursor:pointer;' onclick='tingxieleyuan.myclick(\"" + this.arr[i - 1].mp3 + "\")'>" + this.arr[i - 1].wenzi + "</label>";

			}

			tingxieleyuan.loops[i - 1] = this.arr[i - 1].mp3;


		}




		tingxieleyuan.html = html;

	};


	return tingxieleyuan;


})();