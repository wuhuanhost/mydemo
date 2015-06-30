var write = (function() {

	var write = {};


	write.init = function(data) {
		this.index = data.index;
		this.type = data.type;
		this.title = data.title;
		this.titleImg = data.titleImg;
		this.id = data.id;
		this.mp3 = data.mp3;
		this.content = data.content;
		this.data = data.data;
		this.scores = data.scores / data.data.length; //每个小题的分数
		this.genHtml(this.scores);

	};

	write.genHtml = function(socres) {
		titles.init(this.title, this.titleImg, this.id, this.mp3, this.index);
		titles.genHtml();
		var t = titles.html;

		var html = "<div class='choice' style='font-size:14px;' id='"+this.index+"-1'>";

		for (var i = 0; i < this.content.length; i++) {

			html += "<p class='content'>" + this.content[i] + "</p>";

		}

		html = html.concat("<div id='" + this.index + "-0-" + this.scores + "' class='answer_memory-" + (this.index - 1) + "'></div>");
		html = html.concat("<input type='hidden'  id='" + this.index + "-0-" + this.scores + "-b'   value=''/>");
		html = html.concat("<input type='hidden'  id='" + this.index + "-0-" + this.scores + "-a' value='#' />");
		html += "&nbsp;&nbsp;&nbsp;&nbsp;Oliver:<input type='text'  style='border-bottom:1px solid #999;border-top:1px solid #FFFFFF;border-left:1px solid #FFFFFF;border-right:1px solid #FFFFFF;line-height:36px;width:600px;margin-left:20px;height:36px;'/><br/>";
		html += "&nbsp;&nbsp;&nbsp;&nbsp;Police officer:<input type='text'  style='border-bottom:1px solid #999;border-top:1px solid #FFFFFF;border-left:1px solid #FFFFFF;border-right:1px solid #FFFFFF;line-height:36px;width:600px;margin-left:20px;height:36px;'/><br/>";
		html += "&nbsp;&nbsp;&nbsp;&nbsp;Oliver:<input type='text'  style='border-bottom:1px solid #999;border-top:1px solid #FFFFFF;border-left:1px solid #FFFFFF;border-right:1px solid #FFFFFF;line-height:36px;width:600px;margin-left:20px;height:36px;'/><br/>";
		html += "&nbsp;&nbsp;&nbsp;&nbsp;Police officer:<input type='text'  style='border-bottom:1px solid #999;border-top:1px solid #FFFFFF;border-left:1px solid #FFFFFF;border-right:1px solid #FFFFFF;line-height:36px;width:600px;margin-left:20px;height:36px;'/><br/>";
		html += "&nbsp;&nbsp;&nbsp;&nbsp;Oliver:<input type='text'  style='border-bottom:1px solid #999;border-top:1px solid #FFFFFF;border-left:1px solid #FFFFFF;border-right:1px solid #FFFFFF;line-height:36px;width:600px;margin-left:20px;height:36px;'/><br/>";
		html += "&nbsp;&nbsp;&nbsp;&nbsp;Police officer:<input type='text'  style='border-bottom:1px solid #999;border-top:1px solid #FFFFFF;border-left:1px solid #FFFFFF;border-right:1px solid #FFFFFF;line-height:36px;width:600px;margin-left:20px;height:36px;'/><br/>";
		html += "<p>"
		write.html = t + html;


	};




	return write;



})();