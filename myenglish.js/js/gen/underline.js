var underline = (function() {

	var underline = {};

	underline.init = function(data) {

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

	underline.write = function(dom) {

		if ($(dom).attr("readonly") == "readonly") {

			alert("请先点击开始答题按钮，然后进行答题");

		} else {

			$(dom).css("border-bottom", "1px solid #f05183");

			$(dom).onfocus;

		}

	};

	underline.onMyBlur = function(dom, ids, ids1, ids11) {

		var idArr =ids.split("-");

		if ($(dom).val() != "") {

			$(dom).css("border-bottom", "1px solid #388c43");

			$("#" + idArr[0] + "-" + idArr[1] + "-progress").css("background-color", "#227218");

		} else {

			$(dom).css("border-bottom", "1px solid #999999");

			$("#" + idArr[0] + "-" + idArr[1] + "-progress").css("background-color", "#cd3605");
		}

		$(dom).onfocus;

		$("#" + ids1).html($(dom).val());

		//		console.log($("#"+ids).val()+"   "+$("#"+ids).val()+"  "+$(dom).val())

		$("#" + ids).val(removeHTMLTag($("#" + ids11).html()));


		if (removeHTMLTag(underline.source) == $("#" + ids).val()) {

			$("#" + ids).val("");

		}
	};

	underline.genHtml = function(scores) {

		underline.html = "";

		titles.init(this.title, this.titleImg, this.id, this.mp3, this.index);

		titles.genHtml();

		var t = titles.html;

		var html = "<div class='underline'>";

		underline.source = "";

		for (var i = 0; i < this.data.length; i++) {

			html = html.concat("<div id='"+this.index+"-"+(i+1)+"'>");

			html = html.concat("<span class='question'>" + this.data[i].question + "</span>");

			var id = this.index + "-" + (i + 1) + "-" + this.scores + "-b";

			var under = "<span class='option' id='" + id + "-" + i + "'>";

			for (var j = 0; j < this.data[i].underline.length; j++) {

				if (this.data[i].underline[j] === "^_^") {

					underline.source += "";

					under = under.concat("<input type='text' class='beforeInput' readonly='readonly' onclick='underline.write(this)' onblur='underline.onMyBlur(this,\"" + id + "\",\"" + id + "-" + (i + 1) + "\",\"" + id + "-" + i + "\")'/>   <label style='display:none' id='" + id + "-" + (i + 1) + "'></label>   ");

				} else {

					underline.source += this.data[i].underline[j];

					under = under.concat("<label>   " + this.data[i].underline[j] + "   </label>");

				}
			}

			under += "</span><br/>";

			console.log(removeHTMLTag(under));

			html = html.concat(under);
			html = html.concat("<div id='" + this.index + "-" + (i + 1) + "-" + this.scores + "' class='answer_memory-" + (this.index - 1) + "'></div>");
			html = html.concat("<input type='hidden'  id='" + this.index + "-" + (i + 1) + "-" + this.scores + "-b'   value=''/>");
			html = html.concat("<input type='hidden'  id='" + this.index + "-" + (i + 1) + "-" + this.scores + "-a' value='" + this.data[i].answer + "' />");
			html = html.concat("</div>");

		}

		html = html.concat("</div>");

		underline.html += t + html;

	};

	return underline;

})();