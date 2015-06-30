var cr = (function($) {

	var cr = {};

	cr.init = function() {

		this.count();

		this.genHtml();

	};


	//成绩统计
	cr.count = function() {

		var arr = [];

		var arr1 = [];

		var allScores = 0; //总分数

		var myScores = 0; //我的得分

		var _index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 3, 14, 15, 16, 17, 18, 19, 20];

		var listArr = [];

		for (var i = 0; i < _index.length; i++) {

			if ($(".answer_memory-" + i).html() != null) {

				var arr = [];

				var title = $(".answer_memory-" + i + "-title").text();

				$(".answer_memory-" + i).each(function(index, data) {

					var result = {};

					var no = data.id.split("-");

					var sco = 0; //每道题目的得分

					allScores += parseInt(no[2]); //计算当前大题的总分数

					if (removeHTMLTag($("#" + data.id + "-a").val().replace(/\s+/g, "").toLowerCase()) == removeHTMLTag($("#" + data.id + "-b").val().replace(/\s+/g, "").toLowerCase())) {

						result.result = true;

						myScores += parseInt(no[2]); //计算当前大题我的得分

						sco = parseInt(no[2]);

					} else {

						result.result = false;

					}

					result.description = "第" + no[1] + "小题填写的答案是：" + $("#" + data.id + "-b").val() + " 本小题得分" + sco;

					result.index = no[1];

					result.myAnswer = $("#" + data.id + "-b").val();

					result.sco = sco;

					result.answer = $("#" + data.id + "-a").val();

					result.title = title;

					arr.push(result);

				})

				listArr.push(arr);
			}

		}

		cr.allScores = 0;

		cr.allScores += allScores;

		cr.myScores = 0;

		cr.myScores += myScores;

		cr.result = listArr; //统计结果

		var countTime = $("#usetime").val();

		var h, m, s;

		h = parseInt(countTime / 3600);

		if (h >= 1) {
			h = "0" + h;
		} else {
			h = "00";
		}

		m = parseInt((countTime - 3600 * h) / 60);

		if (10 <= m < 60) {
			m = m;
		}

		if (0 <= m && m <= 9) {
			m = "0" + m;

		}
		s = countTime - 3600 * h - 60 * m;
		if (s == 0) {
			s = "00";
		}
		if (0 < s && s <= 9) {
			s = "0" + s;
		}
		cr.usetime = "【 " + h + "：" + m + "：" + s + " 】";

		console.log(cr.result);

		console.log(cr.usetime);

	};

	//生成结果视图
	cr.genHtml = function() {

		console.log(cr)

		var html = "<h3 style='text-align:center;color:#f05183'>评 分 卡</h3>";
		html += "<p>考试用时：" + cr.usetime + " </p>";
		html += "<p>考试得分 ：<label style='font-size:16px;color:red;font-weight:bold;'>" + cr.myScores + "</label>&nbsp;<label style='font-size:16px;color:#999999;'>总分" + cr.allScores + "</label></p>";
		for (var i = 0; i < cr.result.length; i++) {
			html += "<hr/>";
			html += "<p style='font-size:14px;font-weight:bold;'>" + cr.result[i][0].title.replace("播放音频", "").replace("停止播放", "") + "<p>";
			for (var j = 0; j < cr.result[i].length; j++) {
				if (cr.result[i][j].result == true) {
					html += "<p style='text-align:center;font-weight:bold;font-size:12px;'>第" + cr.result[i][j].index + "小题</p>";
					html += "<p style='padding-left:2em;'>我的答案: <label style='color:#522d24;'> " + cr.result[i][j].myAnswer + "</label>&nbsp;&nbsp;&nbsp;<label style='color:green;font-size:18px;font-weight:bold;'>√</label></p>";
					html += "<p style='padding-left:2em;'>本小题得分: <label style='color:green;'> " + cr.result[i][j].sco + "</label></p>";
				} else {
					html += "<p style='text-align:center;font-weight:bold;font-size:12px;'>第" + cr.result[i][j].index + "小题</p>";
					html += "<p style='padding-left:2em;'>我的答案: <label style='color:#522d24;'> " + cr.result[i][j].myAnswer + "</label>&nbsp;&nbsp;&nbsp;<label style='color:red;font-size:18px;font-weight:bold;'>×</label></p>";
					html += "<p style='padding-left:2em;'>本小题得分: <label style='color:red;'> " + cr.result[i][j].sco + "</label></p>";
					html += "<p style='padding-left:2em;'>正确答案: <label style='color:#0095d9;'> " + cr.result[i][j].answer + "</label></p>";
				}
			}

		}
		cr.html = "";
		cr.html = html;
		$("#result").html(cr.html + "<div style='height:100px;'></div>");


	}

	return cr;

})(jQuery);