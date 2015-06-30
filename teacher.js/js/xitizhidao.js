var xitizhidao = (function($) {
	var xitizhidao = {};



	xitizhidao.init = function(data) {
		this.titleImg = data.titleImg;
		this.title = data.title;
		this.arr = data.contents;
		this.id=data.id;
	}


	xitizhidao.showAnswer = function(id, doms) {

		if ($(doms).html() == "查看答案") {
			$("#" + id).show();
			$(doms).html("隐藏答案");
			$(doms).css("background-color", "#f05183");
		} else {
			$("#" + id).hide();
			$(doms).html("查看答案");
			$(doms).css("background-color", "#0095d9");
		}

	}

	xitizhidao.genHtml = function() {


		var html = "<br/><h3 id='"+this.id+"'><img src='" + this.titleImg + "' width='150px'/></h3>";
		var contents = "";
		for (var i = 0; i < this.arr.length; i++) {

			contents += "<p class='chinese' style='color:red;line-height: 20px;font-family:微软雅黑;'>问" + this.arr[i].question + "<button class='noHover' onclick='xitizhidao.showAnswer(\"xtzd-"+i+"\",this)'>查看答案</button></p><p class='chinese' style='display:none' id='xtzd-"+i+"'><label style='color:green;line-height:20px;font-family:微软雅黑;' >答：</label>" + this.arr[i].answer + "</p>"


		}
		xitizhidao.html = "";
		xitizhidao.html = html + contents;
	}



	return xitizhidao;





})(jQuery);