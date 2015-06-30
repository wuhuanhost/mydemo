var index = (function() {

	var index = {};
	index.init = function(data) {
		this.bigTitle = data.bigTitle;
		this.title = data.title;
		this.mp3 = data.mp3;
		this.contents = data.contents;
		this.imgs = data.imgs;
		this.lessons = data.lessons;



	};

	index.genHtml = function() {

		var html1 = "<audio src='" + this.mp3 + "' id='audio'></audio><div id='indexStyle1'><h1>" + this.bigTitle + "</h1><h2>" + this.title + "</h2>";
		var p = "";
		for (var i = 0; i < this.contents.length; i++) {

			p += "<p>" + this.contents[i] + "</p>";

		}
		html1 += p + "</div>";


		var html2 = "<div id='indexStyle2'><ul>";
		var li = "";
		for (var j = 0; j < this.imgs.length; j++) {
			li += "<li><img src='" + this.imgs[j] + "' alt='' /></li>";

		}

		html2 += li + "</ul><div style='clear: both;'></div><br/><br/><br/><br/><br/><br/>";

		var html3 = "";
		var l = "";
		for (var k = 0; k < this.lessons.length; k++) {

			l += "<span class='indexSpan1'><a href='" + this.lessons[k].link + "'>" + this.lessons[k].title + "</a></span><br /><span class='indexSpan2'>" + this.lessons[k].lesson + "</span><br />";

		}

		html3 += l;
		html3 += "<button onclick=\"playVideo('audio')\" style='width:100px;height:36px;margin-left:460px;'>播放音乐</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style='width:100px;height:36px;background-color: #f05183;' onclick=\"stopVideo('audio')\">停止播放</button><br/><br/><br/>";

		index.html = "";

		index.html += html1 + html2 + html3 + "<span class='bottomSpan'></span></div>";


	}


	return index;






})();

var data = {

	"bigTitle": "第一组",
	"title": "我爱读书",
	"mp3": "mp3/index.mp3",
	"contents": [
		"一本好书，如一位博学的老师， 教给我们丰富的知识；",

		"一本好书，如一位知心的朋友，",

		"倾听我们的诉说 。 亲近她，我们将获得无穷的智慧；",

		"拥抱她，我们能叩开成功的大门 。",
	],
	"imgs": [
		"img/chinese/zu_1_001.jpg",

		"img/chinese/zu_1_002.jpg",

		"img/chinese/zu_1_003.jpg",

		"img/chinese/zu_1_004.jpg",
	],
	"lessons": [{
		"title": "1.窃读记",
		"lesson": "经历艰辛与惧怕　收获知识和快乐"
	}, {
		"title": "2.小苗和大叔的对话",
		"lesson": "破土而出的小苗读书困惑多　枝繁叶茂的大树循循解疑惑"
	}, {
		"title": "3.走遍天下书为侣",
		"lesson": "独自旅行以书为伴 书读百遍其义自见"
	}, {
		"title": "4.我的“长生果”",
		"lesson": "精神食粮伴成长 厚积薄发助成功"
	}]


}