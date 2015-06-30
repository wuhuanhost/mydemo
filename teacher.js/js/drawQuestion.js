/**问答题**/
var drawQuestion = {

	/**
	 * 变量列表
	 * @type {String}
	 *
	 */
	title: '',
	content: '',
	description: '',
	answer: '',
	expositiom: '',
	index: '',
	questions: '',
	contentQuestionHtmls:null,
	contentHtml: null,
	descriptionHtml: null,

	titleHtml: '',
	html: '', //生成的html

	/**
	 * 初始化方法
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	init: function(data) {
		//console.log(data.content)
		content = data.content;
		description = data.description;
		answer = data.answer;
		expositiom = data.expositiom;
		title = data.title;
		index = data.index;
		questions = data.questions;

	},

	drawQuestionHtml: function(data) {

		drawQuestion.init(data);
		
		for (var i = 0; i < questions.length; i++) {

			contentHtml += "<p class='title'>" + questions[i].question + "<button onclick='showAnswer(15)'>显示答案</button></p><p class='answer' id='15'>" + questions[i].question + "+</p>";

		}

		alert(contentHtml);

	}




};
