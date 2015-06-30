var titles = (function() {

	var titles = {};

	titles.init = function(title, titleImg, id, mp3,index) {
		this.mp3 = mp3;
		this.title = title;
		this.titleImg = titleImg;
		this.id = id;
		this.index=index;

	};

	titles.playVideo = function(mp3) {
		console.log(titles.html)
		var audio = $("#audio")[0];
		audio.src = mp3;
		audio.load();
		audio.play();
	};

	titles.pauseVideo = function() {
		var audio = $("#audio")[0];
		audio.pause();

	};

	titles.genHtml = function() {
	
		var html = "";
		if (this.mp3 != "" && this.mp3 != null && typeof(this.mp3) != "undefined") {
			html += "<h3 id='" + this.id + "' class='h3-title answer_memory-"+(this.index-1)+"-title'>" + this.title + "<button onclick='titles.playVideo(\"" + this.mp3 + "\")'>播放音频</button>&nbsp;<button onclick='titles.pauseVideo()'>停止播放</button></h3>";
		} else {
			html += "<h3 id='" + this.id + "' class='h3-title answer_memory-"+(this.index-1)+"-title'>" + this.title + "</h3>";
		}
		titles.html = html;
	};

	return titles;

})();