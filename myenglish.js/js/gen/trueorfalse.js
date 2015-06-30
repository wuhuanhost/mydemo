var trueorfalse = (function() {

	var trueorfalse = {};



	trueorfalse.init = function(data) {
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

	trueorfalse.click = function(dom) {

		if ($(dom).attr("readonly") == "readonly") {
			alert("请先点击开始答题按钮，然后进行答题");
		} else {
			$(dom).css("border-bottom", "1px solid #f05183");
			$(dom).onfocus;
		}
	};

	trueorfalse.blur = function(dom) {
		
		var idArr = dom.id.split("-");

		if ($(dom).val() != "") {
			$("#" + idArr[0] + "-" + idArr[1] + "-progress").css("background-color", "#227218");

			$(dom).css("border-bottom", "1px solid #388c43");

		} else {
			$("#" + idArr[0] + "-" + idArr[1] + "-progress").css("background-color", "#cd3605");
			$(dom).css("border-bottom", "1px solid #999999");
		}
	};


	trueorfalse.genHtml = function() {

		titles.init(this.title, this.titleImg, this.id, this.mp3, this.index);
		titles.genHtml();
		var t = titles.html;

		var html = "<div class='trueorfalse'>";

		for (var i = 0; i < this.data.length; i++) {

			html += "<span class='index'  id='"+this.index+"-"+(i+1)+"'><input type='text' class='write' id='" + this.index + "-" + (i + 1) + "-" + this.scores + "-b' readonly='readonly' onclick='trueorfalse.click(this)'   onblur='trueorfalse.blur(this)'/><label>" + this.data[i].question + "</label></span>";

			html += "<div id='" + this.index + "-" + (i + 1) + "-" + this.scores + "' class='answer_memory-" + (this.index - 1) + "'></div>";

			html += "<input type='hidden' id='" + this.index + "-" + (i + 1) + "-" + this.scores + "-a'  value='" + this.data[i].answer + "'/>";
		}

		html += "</div>";

		trueorfalse.html = "";

		trueorfalse.html += t + html;

	};

	return trueorfalse;

})();