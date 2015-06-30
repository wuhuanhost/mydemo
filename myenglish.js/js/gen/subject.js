var subject = (function() {


	var subject = {};


	subject.init = function(data) {
		this.index = data.index;
		this.type = data.type;
		this.title = data.title;
		this.titleImg = data.titleImg;
		this.id = data.id;
		this.mp3 = data.mp3;
		this.content = data.content;
		subject.genHtml();

	};
	subject.genHtml = function() {

		var html = "";

		if (this.type == "h1") {

			html += "<p style='text-align:center;font-size:30px;font-weight:bold;'>" + this.title + "</p>";

		} else if (this.type == "h2") {

			html += "<p style='text-align:center;font-size:20px;font-weight:bold;'>" + this.title + "</p>";
		}

		subject.html = "";
		subject.html = html;
	};

	return subject;
})();