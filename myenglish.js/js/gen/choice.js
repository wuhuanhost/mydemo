var choice = (function() {

	var choice = {};

	choice.init = function(data) {
		console.log(data)
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
	//	choice.choice = function(dom) {
	//		alert(123);
	//
	//		var idArr = dom.class.split("-");
	//
	//		$("#" + $(dom).attr("class")).val($(dom).val());
	//
	//		$("#" + idArr[0] + "-" + idArr[1] + "-progress").css("background-color", "green");
	//
	//
	//	};

	choice.inputClick = function(dom) {
		var idArr = $(dom).attr("class").split("-");
		console.log(idArr);
		if ($(dom).attr("disabled") == "disabled") {
			alert("请先点击开始答题按钮，然后开始作答！");
		} else {

			$("#" + $(dom).attr("class")).val($(dom).val());

			$("#" + idArr[0] + "-" + idArr[1] + "-progress").css("background-color", "#227218");

		}


	};


	choice.genHtml = function(scores) {

		titles.init(this.title, this.titleImg, this.id, this.mp3, this.index);
		titles.genHtml();
		var t = titles.html;

		var allHtml = "";
		var opt = ['A', 'B', 'C'];
		for (var c = 0; c < this.data.length; c++) {

			//	console.log(this.data.length);

			var html = "";

			html += "<div class='choice' id='" + this.index + "-" + (c + 1) + "'>";

			//循环question
			if (this.data[c].question != null) {
				for (var i = 0; i < this.data[c].question.length; i++) {

					html = html.concat("<span class='question'>" + this.data[c].question[i] + "</span>");

				}
			}

			var span = "<span class='test'><label class='label'>请选择答案：</label>";

			for (var j = 0; j < this.data[c].option.length; j++) {

				html = html.concat("<span class='option'>" + this.data[c].option[j] + "</span>");

				span = span.concat("<label>" + opt[j] + "</label><input disabled='disabled' onclick='choice.inputClick(this)' type='radio' name='" + this.index + "-" + (c + 1) + "-" + this.scores + "-a' value='" + opt[j] + "'   class='" + this.index + "-" + (c + 1) + "-" + this.scores + "-b' />");
			}
			span += "</span>";
			html += span + "<input type='hidden' id='" + this.index + "-" + (c + 1) + "-" + this.scores + "-b' value='' /><input type='hidden' id='" + this.index + "-" + (c + 1) + "-" + this.scores + "-a' value='" + this.data[c].answer + "' /><div class='answer_memory-" + (this.index - 1) + "'  id='" + this.index + "-" + (c + 1) + "-" + this.scores + "'></div></div>";
			allHtml += html + "<br/>";
		}
		if (this.content != null && this.content.length >= 1) {

			var chtml = "";

			for (var k = 0; k < this.content.length; k++) {

				chtml = chtml.concat("<p class='content'>" + this.content[k] + "</p>");
			}

			choice.html = t + chtml + allHtml;

		} else {

			choice.html = t + allHtml;
		}


	}




	return choice;

})();