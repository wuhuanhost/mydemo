var progress = (function($) {

	var progress = {};

	progress.init = function() {
		this.countTotal();
		this.genHtml();
	};

	//统计所有的题目
	progress.countTotal = function() {

		var _index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 3, 14, 15, 16, 17, 18, 19, 20];

		var listArr = [];

		for (var i = 0; i < _index.length; i++) {

			if ($(".answer_memory-" + i).html() != null) {

				var arr = [];

				var title = $(".answer_memory-" + i + "-title").text();

				$(".answer_memory-" + i).each(function(index, data) {

					var result = {};

					if (removeHTMLTag($("#" + data.id + "-a").val().replace(/\s+/g, "").toLowerCase()) == removeHTMLTag($("#" + data.id + "-b").val().replace(/\s+/g, "").toLowerCase())) {

						result.result = true;


					} else {

						result.result = false;

					}

					result.title = title;

					arr.push(result);

				})

				listArr.push(arr);
			}

		}

		progress.result = listArr; //统计结果

		console.log(listArr);

	};


	progress.myClick = function(param) {

		window.location.href = "#"+param+"";
		

	};


	progress.genHtml = function() {


		console.log(progress.result.length);

		var html = "<div style='width:300px;margin-top:16px;' id='progress'><h3 style='text-align:center;font-size:16px;color:#21BBFF;'>答题进度卡</h3>";
		html += "<p><font color='#227218'>█：表示已做答</font>&nbsp;&nbsp;&nbsp;<font color='#cd3605'>█：表示未做答</font></p>";
		html += "<hr/>";
		for (var i = 0; i < progress.result.length; i++) { //循环每一个大题
			html += "<label style='font-size:14px;font-weight:bold;'>" + progress.result[i][0].title + "</label><br />";

			for (var j = 0; j < progress.result[i].length; j++) { //循环每一个大题的每一个小题

				html += "<div style='width:16px;height:16px;background-color: #cd3605;float:left;margin-left:10px;margin-top:20px;cursor:pointer;' title='第" + (i + 1) + "大题第" + (j + 1) + "小题'  id='" + (i + 1) + "-" + (j + 1) + "-progress'  onclick='progress.myClick(\"" + (i + 1) + "-" + (j + 1) + "\")'></div>";

			}
			html += "<div style='clear: both;'></div><br/></div>";

		}





		$("#result").html(html + "<div style='height:100px;'></div>");




	};








	return progress;








})(jQuery);