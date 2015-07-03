var advertise = (function($) {

	var advertise = {};


	advertise.init = function(data) {
		this.marquee = data.marquee;
		this.nextpage = data.nextpage;
		this.genHtml();
		this.action();


	};

	advertise.genHtml = function() {
		var marqueeHtml = "<div id='bottom'><marquee onmouseover = this.stop() onmouseout = this.start() scrollamount = 3 scrollDelay = 3 style = 'cursor:pointer;' >";
		for (var m in this.marquee) {

			if (this.marquee[m].state==="open") {
				marqueeHtml += "<label>" + this.marquee[m].text + "</label>";
			}
		}
		marqueeHtml += "</marquee></div> ";

		var nextpageHtml = "<div id='pageflip'><a href='index.html' target='_blank'><img width='307' height='319' alt='index.html' src='http://www.17sucai.com/preview/102609/2014-03-25/jQuery+css%E5%B8%A6%E9%98%B4%E5%BD%B1%E7%9A%84%E6%92%95%E9%A1%B5%E5%B9%BF%E5%91%8A%E4%BB%A3%E7%A0%81/images/page_flip.png'></a><div class='msg_block'></div></div>";

		var html = marqueeHtml + nextpageHtml;

		$("body").append(html);
		

		$("#pageflip .msg_block").css("background","url("+this.nextpage.img+") no-repeat right top");
};

	advertise.action = function() {

		/**广告代码**/
		$("#pageflip").hover(function() {
			$("#pageflip img , .msg_block").stop().animate({
				width: '307px',
				height: '319px'
			}, 500);
		}, function() {
			$("#pageflip img").stop().animate({
				width: '50px',
				height: '52px'
			}, 220);
			$(".msg_block").stop().animate({
				width: '50px',
				height: '50px'
			}, 200);
		});

	}


	return advertise;




})(jQuery);


var jsons = {
	"marquee": [{
		"state": "open",
		"text": "欢迎使用本教学辅助软件 "
	}, {
		"state": "close",
		"text": "本教学辅助软件即将升级到新版本， 请及时到网站下载新版软件 "
	}],
	"nextpage": {
		"state": "open",
		"img": "http://www.17sucai.com/preview/102609/2014-03-25/jQuery+css%E5%B8%A6%E9%98%B4%E5%BD%B1%E7%9A%84%E6%92%95%E9%A1%B5%E5%B9%BF%E5%91%8A%E4%BB%A3%E7%A0%81/images/subscribe.png"
	}
};




//#marquee
//	[open][欢迎使用本教学辅助软件]
//	[close][本教学辅助软件即将升级到新版本， 请及时到网站下载新版软件]
//
//# nextpage
//	[open][abc.jpg]