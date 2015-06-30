var kewen = (function($) {
	var kewen = {};
	kewen.init = function(data) {
		this.kewenArr = data.kewenArr;
		this.id=data.id;
	};


	kewen.showAll = function() {

		$(".describe-style").css("color", "#3190CD");
		$(".duanluojiexi").show();



	};

	kewen.hideAll = function() {

		$(".describe-style").css("color", "#EEEEEE");
		$(".duanluojiexi").hide();



	};

	kewen.myClick = function(dom) {

		var c = $(dom);
		var cc = c.css("color");
		//console.log(String(cc));

		if (cc == 'rgb(238, 238, 238)') {
			c.css("color", "#3190CD");
		} else {
			c.css("color", "#EEEEEE");
		}
	};
	kewen.myClicks = function(id) {
		$("#" + id + "-jiexi").toggle();
	};
	kewen.genKenWenHtml = function() {
		var keWenHtml = "";
		var duanluoHtml = "";
		var html = "";
		var action = "<span class='describe-style' onclick='kewen.myClicks(this)'>";

		var rege = new RegExp('/^<span(.*)>(.*)<\/span>$/ig');


		for (var i = 0; i < this.kewenArr.length; i++) {



			keWenHtml += this.kewenArr[i].kewen.replace(/【/g, "<img src='img/chinese/icon_luobo.jpg' /><span class='describe-style' onclick='kewen.myClick(this)'>").replace(/】/g, "</span>");


			//keWenHtml += "<span class='kewen-style'>" + this.kewenArr[i].kewen + "</span>" + abcdef.replace(/<span(.*)>/ig, "<span class='describe-style' style='background:url(\"img\/chinese\/icon_luobo.jpg\") repeat;padding-left:20px;' onclick='kewen.myClicks(this)'>");

			if (this.kewenArr[i].duanluojiexi == "") {
				duanluoHtml += "";
			} else {
				duanluoHtml += "<div id='duoluojiexi' ><img src='img/chinese/icon_duanxi.jpg' alt='' id='" + i + "-duanluo'  onclick='kewen.myClicks(id)'/><label id='" + i + "-duanluo-jiexi'  class='duanluojiexi'>" + this.kewenArr[i].duanluojiexi + "</label></div>";
			}
			if (this.kewenArr[i].suitangdianping != null) {
				duanluoHtml += "<div id='suitangdianping'>" + this.kewenArr[i].suitangdianping + "</div>";
			} else {
				//duanluoHtml += "<div id='suitangdianping'>" + this.kewenArr[i].suitangdianping + "</div><div id='remark'>" + this.kewenArr[i].remark + "</div>";
			}


			if (this.kewenArr[i].remark != null) {
				duanluoHtml += "<div id='remark'>" + this.kewenArr[i].remark + "</div>";
			} else {
				
				//duanluoHtml += "<div id='suitangdianping'>" + this.kewenArr[i].suitangdianping + "</div><div id='remark'>" + this.kewenArr[i].remark + "</div>";
			}
			
			
			keWenHtml = "<div class='kewen'>" + keWenHtml + "</div>";
			html += keWenHtml + duanluoHtml;
			keWenHtml = "";
			duanluoHtml = "";
		}
		kewen.html = "";
		kewen.html = "<br/><br/><br/><h3 id='"+this.id+"'><img src='img/chinese/title_kewenquanxi.jpg' width='150px'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='buttonStyle' onclick='kewen.showAll()'>显示全部</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='buttonStyle' style='background-color:#f05183' onclick='kewen.hideAll()'>隐藏全部</button></h3><div id='kewens'>" + html + "</div>";
		kewen.html.toString().replace(/^undefined$/gi, "");
		//console.log(html);
		//$("#contentss").append("<h3 id='eight'><img src='img/chinese/title_kewenquanxi.jpg' width='150px'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='buttonStyle' onclick='kewen.showAll()' >显示全部</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='buttonStyle' style='background-color:#f05183' onclick='kewen.hideAll()'>隐藏全部</button></h3><div id='kewens'>" + html + "</div>");
	};
	return kewen;
})(jQuery);
var objTest = {
	"title": "课文全析",
	"titleImg": "img/title_kewenquanxi.jpg",
	"kewenArr": [{
		"kewen": "<br/>① 转过街角，看见饭店的招牌，闻见炒菜的香味，听见锅勺敲打的声音，我放慢了脚步 【“转过”“ 看见”“闻见”“听见”“放慢”这一系列动词的运用让读者产生了疑惑——是饭店吸引着“我”吗？】放学后急匆匆地从学校赶到这里，目的地可不是饭店，而是紧邻它的一家书店。【“不是……而是……”这一关联词说明吸引“我”的是书店，从而突出了作者对书的喜爱之情。】",
		"duanluojiexi": "这个部分巧设悬念，突出表现了书对作者具有较强的吸引力。",
		"remark": "第一部分（①）：放学后“我”急匆匆地赶到书店。",
		"suitangdianping": "首句引发人的的猜想，第二句让人恍然大悟：吸引作者放慢脚步的是书店。"
	}, {
		"kewen": "② 我边走边想“昨天读到什么地方了?那本书放在哪里? 左边第三排，不错……【作者的自言自语，说明她已完全沉浸在对书的渴望之中。】走到门口，便看见书店里仍像往日一样挤满了顾客。我可以安心了。但我又担忧那本书会不会卖光，因为一连几天都看见有人买，昨天好像只剩下一两本了。",
		"duanluojiexi": "这个部分作者通过对心理的刻画，表现出她对自己喜爱之书的牵挂。",
		"suitangdianping": "本段中，作者先是回忆自己看到一半的书放在什么地方；再是看到满店的顾客，为自己又能多看会儿书感到开心；继而又转为担忧那本书是否卖光。心情可谓是跌宕起伏，“安心”源于书， 作者可真是爱书成痴了!"
	}, {
		"kewen": "③ 我跨进店门，暗喜没人注意。我踮起脚尖，从大人的腋（yè）下挤进去。【“踮”“挤”等动词侧面表现了书店的顾客多，也说明作者对读书的急切。】  哟(yõ) ，把短发弄乱了，没关系， 我总算挤到里边来了。在一排排花花绿绿的书里，我的眼睛急切地寻找，却找不到那本书。从头来，再找一遍。啊!它在这里，原来不在昨天的地方了。",
		"duanluojiexi": "这个部分描写了作者走进书店时的动作，以及发现自己所寻找的书时的惊喜。",
		"suitangdianping": "本段中，作者进入书店时如此小心翼翼，连弄乱了头发都顾不上，可真是迫不及待!由“急切”“ 寻找”“却找不到”转为“啊!它在这里”，心情从着急到惊喜的突然转变也紧紧抓住了读者的心。"
	}, {
		"kewen": "④ 急忙打开书，一页，两页，我像一匹饿狼，贪婪 (lán)地读着。【作者在这里将自己比作饿狼，书则是喂饱“我”的食粮，写出了“我”强烈的求知欲。】我很快乐，也很惧（jù）怕——这种窃读的滋味!",
		"duanluojiexi": "此段写了作者对书的渴望和对窃读的别样体会。",
		"suitangdianping": "作者对书的渴求和读书时的惧怕正是文章的中心所在。将自己比喻成一匹饿狼突显了作者对知识的渴求。快乐、惧怕 交汇成了“我”窃读的别样滋昧。"
	}, {
		"kewen": "⑤ 我害怕被书店老板发现，每当我觉得当时的环境已不适宜再读下去的时候，我会知趣地放下书走出去，再走进另一家。有时，一本书要到几家书店才能读完。",
		"duanluojiexi": "这一段写“我”因为害怕被书店老板发现，所以看完一本书要跑好几家书店。"
	}, {
		"kewen": "⑥我喜欢到顾客多的书店，因为那样不会被人注意。【这是一个倒装句，解释自己喜欢到顾客多的书店的原因。】进来看书的人虽然很多，但是像我这样常常光顾而从不购买的，恐怕没有。因此我要把自己隐藏起来。有时我会贴在一个大人的身边，仿佛我是他的小妹妹或小女儿。【作者想尽办法让自己可以多看一会儿书。】",
		"duanluojiexi": "这里描写作者小心翼翼窃读的场面，表现了“我”机智的一面。"
	}, {
		"kewen": "⑦最令人开心的是下雨天，越是倾盆大雨我越高兴，因为那时我便有充足的理由在书店待下去。就像在屋檐下躲雨， 你总不好意思赶我走吧?【这里是对作者的心理活动的描写。】我有时还要装着皱起眉头，不时望着街心，好像说：“这雨，害得我回不去了。”其实，我的心里却高兴地喊着：“大些！再大些！”【表面的焦急与内心的高兴形成对比，这样写生动有趣地表现了作者为能在书店多看会儿书而兴奋无比的心情。】",
		"duanluojiexi": "本段描写了作者在雨天快乐读书的情形。",
		"suitangdianping": "这里用对比的手法，将作者表情上的焦急与内心的兴奋进行对比，表现了作者看书时的快乐，更体现出作者对读书的热爱。"
	}, {
		"kewen": "⑧ 当饭店飘来一阵阵菜香时，我已饿得饥肠辘(lù)辘，那时我也不免要做白日梦：如果口袋里有钱该多好!去吃一碗热热的面条，回到这里时，已经有人给摆上了一张沙发，坐上去舒舒服服地接着看。【菜香刺激着作者的肠胃，也刺激着她的头脑，让她产生了一系列美好的幻想，但终究是难以实现的。】我的腿真酸哪，不得不交替着用一条腿支撑 (chēng)着， 有时又靠在书柜旁，以求暂时的休息。",
		"duanluojiexi": "作者用现实与幻想作对比，突出了窃读的辛酸。",
		"suitangdianping": "这里将作者的幻想与现实进行对比，表现出作者对读书的喜爱，更体现了她窃读时的辛酸一一饥饿、疲备。"
	}, {
		"kewen": "⑨ 当书店的日光灯忽地亮了起来，我才发觉已经站在这里读了两个多钟头了。我合上书，咽了一口唾沫，好像把所有的智慧都吞下去了，然后才依依不舍地把书放回书架。【这里把“咽了一口唾沫”想象成吞下“所有的智慧”，表现了作者虽然饥肠辘辘，但饱读两个多钟头后，她感到满足。】",
		"duanluojiexi": "窃读虽饱含辛酸，但让作者收获了智慧。",
		"remark": "第二部分(②-⑨):生动描写了作者在书店窃读的经历。"
	}, {
		"kewen": "⑩ 我低着头走出书店，脚站得有些麻木，我却浑身轻松。 这时，我总会想起国文老师鼓励我们的话:“记住，你们是吃饭长大的，也是读书长大的!”【\"吃饭\"是为了满足人对物质的需求，而“读书”则是为了满足人精神上的需求。】",
		"beizhu": "第三部分(⑩):记叙了作者离开书店时的感受，强调了国文老师的话对“我”的影响。",
		"dianping": "国文老师的话强调的是后者。只有知识与智慧不断增长，才能让人从灵魂开始健康成长。"
	}]
};
//		kewen.init(objTest);
//		kewen.genKenWenHtml();