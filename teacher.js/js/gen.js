var gen = (function($) {

	var gen = {

	};

	//初始化方法
	gen.init = function(data) {
		this.title=data.title;
		this.tujiexinci = data.tujiexinci; //图解新词
		this.ketijiexi = data.ketijiexi; //课题解析
		this.xueximubiao = data.xueximubiao; //学习目标
		this.zuozhejieshao = data.zuozhejianjie; //作者介绍
		this.shengziquanxi = data.shengziquanxi; //生字全析
		this.yicuofanghuoqiang = data.yicuofanghuoqiang; //易错防火墙
		this.ciyujijing = data.ciyujijin; //词语集锦
		this.kewenquanxi = data.kewenquanxi; //课文全析
		this.kewenjiegou = data.kewenjiegou; //课文结构
		this.hudongtiwen = data.hudongtiwen; //互动提问
		this.xitizhidao = data.xitizhidao; //习题指导


	};
	//图解新词
	gen.gen_tujiexinci = function() {
		gen.html = "";
		if(this.tujiexinci != null){
			picture.init(this.tujiexinci);
			picture.genHtml();
			gen.html += picture.html;
		}

	};
	//课题解析
	gen.gen_ketijiexi = function() {
		
	    if(this.ketijiexi!=null){
			ketijiexi.init(this.ketijiexi);
			ketijiexi.genHtml();
			gen.html += ketijiexi.html + "<br/>";
		
		}

	};
	//学习目标
	gen.gen_xueximubiao = function() {
		if(this.xueximubiao!=null){
			xueximubiao.init(this.xueximubiao);
		    xueximubiao.genHtml();
		    gen.html += xueximubiao.html + "<br/>";

		}
		
	}
	//作者介绍
	gen.gen_zuozhejieshao = function() {

		if(this.zuozhejieshao!=null){
				zuozhe.init(this.zuozhejieshao);
				zuozhe.genHtml();
				gen.html += zuozhe.html + "<br/>";
		}

	};
	//生字全析
	gen.gen_shengziquanxi = function() {

		if(this.shengziquanxi!=null){
			shengziquanxi.init(this.shengziquanxi);
			shengziquanxi.genHtml();
			gen.html += shengziquanxi.html;
		}

	};
	//词语集锦
	gen.gen_ciyujijin = function() {
		ciyujijing.init(this.ciyujijing);
		ciyujijing.test();
		gen.html += ciyujijing.html;
	};

	//课文全析

	gen.gen_kewen = function() {
			if(this.kewenquanxi!=null){

					kewen.init(this.kewenquanxi);
					kewen.genKenWenHtml();
					gen.html += kewen.html;
			}

	};

	//课文结构
	gen.gen_kewenjiegou = function() {

			if(this.kewenjiegou!=null){
					kewenjiegou.init(this.kewenjiegou);
					kewenjiegou.genHtml();
					gen.html += kewenjiegou.html;

			}


	};

	//互动提问
	gen.gen_hudongtiwen = function() {

if(this.hudongtiwen !=null){
		hudongtiwen.init(this.hudongtiwen);
		hudongtiwen.genHtml();
		gen.html += hudongtiwen.html;


}

	};

	//习题指导
	gen.gen_xitizhidao = function() {

			if (this.xitizhidao != null) {

					xitizhidao.init(this.xitizhidao);
					xitizhidao.genHtml();
					gen.html += xitizhidao.html;

			}

	};


	//易错防火墙
	gen.gen_yicuofanghuoqiang = function() {

		if (this.yicuofanghuoqiang != null) {

			yicuofanghuoqiang.init(this.yicuofanghuoqiang);
			yicuofanghuoqiang.genHtml();
			gen.html += yicuofanghuoqiang.html;
		}


	};

	//生成数据
	gen.allHtml = function() {

		gen.gen_tujiexinci();
	
		gen.gen_ketijiexi();

		gen.gen_xueximubiao();

		gen.gen_zuozhejieshao();

		gen.gen_shengziquanxi();
	
		gen.gen_yicuofanghuoqiang();
			
		gen.gen_ciyujijin();

		gen.gen_kewen();

		gen.gen_kewenjiegou();

		gen.gen_hudongtiwen();

		gen.gen_xitizhidao();
			
		try
		{
			var path=process.execPath;
			path=path.replace(/\\/g,"/");
			arr=path.split("/");
			arr.pop();
			path="file:///"+arr.join("/")+"/";
			var str=gen.html;
			str=str.replace(/([\'\"])(swf\/)/g,"$1"+path+"$2");
			str=str.replace(/([\'\"])(mp3\/)/g,"$1"+path+"$2");
			str=str.replace(/([\'\"])(img\/)/g,"$1"+path+"$2");
		
			gen.html=str;

		}
		catch(e)

		{
			console.log("没有打包");
		}



	};

	return gen;


})(jQuery);







////var data = {"title":"第3课 走遍天下书为侣","tujiexinci":{"title":"图解新词","titleImg":"img/title_tujiexinci.jpg","id":"tujiexinci","arrImg":[{"title":"环绕","img":"img/tujiexinci_3_001.jpg"},{"title":"娱乐","img":"img/tujiexinci_3_002.jpg"},{"title":"口琴","img":"img/tujiexinci_3_003.jpg"},{"title":"百音盒","img":"img/tujiexinci_3_004.jpg"},{"title":"背诵","img":"img/tujiexinci_3_005.jpg"},{"title":"角落","img":"img/tujiexinci_3_006.jpg"},{"title":"光线","img":"img/tujiexinci_3_007.jpg"},{"title":"驾舟","img":"img/tujiexinci_3_008.jpg"},{"title":"选择","img":"img/tujiexinci_3_009.jpg"}]},"ketijiexi":{"title":"课题解析","titleImg":"img/title_ketijiexi.jpg","id":"ketijiexi","contents":[{"content":"“走遍天下”是一种形象的说法，意思是走遍世界，走遍天涯海角。“书为侣”就是把书视为伴侣，在生命中时刻相伴，共担风雨，共享喜怒哀乐。作者以“走遍天下书为侣”为题，直抒胸臆，表达了对书的喜爱。"}]},"xueximubiao":{"title":"学习目标","titleImg":"img/title_xueximubiao.jpg","id":"xueximubiao","content":"1． 学习本课的生字、新词。（重点）<br/>2． 正确、流利、有感情地朗读课文，背诵并抄写自己喜欢的段落。（重点）<br/>3． 把握文章主要内容，体会作者以书为侣的理由及反复读书的方法。（难点）"},"zuozhejianjie":{"title":"作者简介","titleImg":"img/title_zuozhejianjie.jpg","id":"zuozhejianjie","contents":[{"content":"尤安.艾肯  (1924―2004)，英国著名的儿童作家。出版过92本小说以及大量的诗歌与短文。曾获英国《卫报》小说奖，小说《夜晚落下》获得美国艾伦奖。主要作品有《威洛比的狼追捕》《那个耳语山》《黑心》《走遍天下书为侣》等。","autherImg":"img/zuozhejianjie_3_001.jpg"}]},"shengziquanxi":{"title":"生字全析","titleImg":"img/title_shengziquanxi.jpg","id":"shengziquanxi","one":{"title":"课标要求会写的字","titleImg":"img/icon_huixiedezi.jpg","contents":[{"imgSrc":"img/shengziquanxi_3_001.jpg","flashSrc":"swf/shengziquanxi_3_001.swf"},{"imgSrc":"img/shengziquanxi_3_002.jpg","flashSrc":"swf/shengziquanxi_3_002.swf"},{"imgSrc":"img/shengziquanxi_3_003.jpg","flashSrc":"swf/shengziquanxi_3_003.swf"},{"imgSrc":"img/shengziquanxi_3_004.jpg","flashSrc":"swf/shengziquanxi_3_004.swf"},{"imgSrc":"img/shengziquanxi_3_005.jpg","flashSrc":"swf/shengziquanxi_3_005.swf"},{"imgSrc":"img/shengziquanxi_3_006.jpg","flashSrc":"swf/shengziquanxi_3_006.swf"},{"imgSrc":"img/shengziquanxi_3_007.jpg","flashSrc":"swf/shengziquanxi_3_007.swf"},{"imgSrc":"img/shengziquanxi_3_008.jpg","flashSrc":"swf/shengziquanxi_3_008.swf"},{"imgSrc":"img/shengziquanxi_3_009.jpg","flashSrc":"swf/shengziquanxi_3_009.swf"}]}},"yicuofanghuoqiang":{"title":"易错防火墙","titleImg":"img/title_yicuofanghuoqiang.jpg","id":"yicuofanghuoqiang","img":"img/yicuofanghuoqiang_3_001.jpg"},"ciyujijin":{"title":"词语集锦","titleImg":"img/title_ciyujijin.jpg","id":"ciyujijin","xincijieshi":{"title":"新词解释","titleImg":"img/icon_xincijieshi.jpg","contents":[{"question":"伴侣","answer":"同在一起生活、工作或旅行的人。"},{"question":"娱乐","answer":"①;使人快乐；消遣。②;快乐有趣的活动。本文取①义。"},{"question":"经历","answer":"亲身见过、做过或遭受过的事。"},{"question":"故地","answer":"曾经居住过的地方。文中指书已读了多遍，已了解并熟悉，如同故地一样。"},{"question":"毫不犹豫","answer":"一点儿也不迟疑，坚决果断。"}]},"jinyici":{"title":"近义词","titleImg":"img/icon_jinyici.jpg","contents":[{"question":"环绕――围绕","answer":null},{"question":"感叹――感慨","answer":null},{"question":"伴侣――伙伴","answer":null},{"question":"美丽――漂亮","answer":null},{"question":"欣赏――观赏","answer":null},{"question":"品味――体味","answer":null},{"question":"忽略――忽视","answer":null},{"question":"方式――方法","answer":null}]},"fanyici":{"title":"反义词","titleImg":"img/icon_fanyici.jpg","contents":[{"question":"熟悉――陌生","answer":null},{"question":"忽略――重视","answer":null},{"question":"故地――异地","answer":null},{"question":"美丽――丑陋","answer":null},{"question":"有趣――乏味","answer":null},{"question":"喜爱――厌恶","answer":null},{"question":"最终――开始","answer":null},{"question":"欣赏――藐视","answer":null},{"question":"毫不犹豫――犹豫不决","answer":null}]},"duoyinzizuci":{"title":"多音字组词","titleImg":"img/icon_duoyincizu.jpg","img":"img/duoyinzi_3_001.jpg"},"jinyicibianxi":{"title":"近义词辨析","titleImg":"img/icon_jinyicibianxi.jpg","contents":[{"company1":"欣赏","company2":"　观赏","xiangtong":"这两个词都有领略、享受的意思。","butong":"“欣赏”强调用喜爱的心情去享受、领略，对象比较宽；“观赏”只是通过视觉<br/>享受美好的事物，对象只是眼睛看到的东西，范围比较窄。","zaoju":"1．我来到峰顶欣赏皑皑的雪景。<br/>2．老师和我们一起观赏杂技表演。"}]},"tingxieleyuan":{"title":"听写乐园","titleImg":"img/icon_tingxieleyuan.jpg","mp3":"mp3/tingxieleyuan","img":"img/tingxieleyuan_3_001.jpg"},"meiduzhidao":{"title":"美读指导","titleImg":"img/icon_meiduzhidao.jpg","mp3":"mp3/meiduzhidao","contents":[{"content":"文章中虽然没有人物对话，但在作者的假设中却有着人物间充满情感色彩的问答甚至辩论，字里行间洋溢着对书的热爱之情。如第一自然段假设的提问，所写到的事物要读出疑问的语气；作者的两次回答要读得肯定、坚决，给人毋庸置疑的感觉；“这有什么关系呢？你不会因为以前见过你的朋友就不愿再见到他们了吧？你不会因为熟悉家中的一切就弃家而去吧？”这里要读出反问的语气。"}]},"kewendaoxue":{"title":"课文导学","titleImg":"img/icon_kewendaoxue.jpg","contents":[{"content":"初读课文，了解文章的主要内容，体会作者选择一本书陪伴自己旅行的两个理由。再读课文，思考作者是如何表达自己的观点的。最后回顾课文，说说自己从中得到了什么启示。"}]}},"kewenquanxi":{"title":"课文全析","titleImg":"img/title_kewenquanxi.jpg","id":"kewenquanxi","kewenArr":[{"kewen":"<br/>① 如果你独自驾舟环绕世界旅行，如果你只能带一样东西供自己娱（yú）乐，你会选择哪一样？一幅美丽的图画，一本有趣的书，一盒扑克牌，一个百音盒，还是一只口琴……","duanluojiexi":"开头假设独自旅行的情景，并规定只能选一样东西作伴，引发人们的选择。"},{"kewen":"② 似乎很难作出选择。<br/>③ 如果你问到我，我会毫不犹豫地回答：“我会选择一本书。”  【直接给出自己的回答，“毫不犹豫”表现了作者坚决的态度。】","duanluojiexi":"作者表明了自己的选择。","remark":"第一部分（①~③）：以假设开头，以自答的方式表明自己的观点。"},{"kewen":"④ 一本书！我听到有人感叹了：如果你坐船周游世界，这一趟（tà ）下来，你可以把它读上一百遍，最终你能背诵（sò ）下来。","duanluojiexi":"进一步假设别人的感叹，为后面阐述自己的观点作铺垫。"},{"kewen":"⑤ 对此，我的回答是：是的，我愿意读上一百遍，我愿意读到能背诵的程度。这有什么关系呢？你不会因为以前见过你的朋友就不愿再见到他们了吧？你不会因为熟悉家中的一切就弃家而去吧？你喜爱的书就像一个朋友，就像你的家。  【作者把书比喻成家和朋友，表现了作者对书真挚的热爱。】 你已经见过朋友一百次了，可第一百零一次再见面时，你还会说：“真想不到你懂这个！”你每天都回家，可不管过了多少年，你还会说：“我怎么没注意过，灯光照着那个角落，光线怎么那么美！”  【进一步表现出作者对书的喜爱，每次与朋友见面，每天回家都会有新的发现，说明一本书可以常读常新。】","duanluojiexi":"用比喻的手法说明自己会选择书的理由。"},{"kewen":"⑥ 你总能从一本书中发现新东西，不管你看过多少遍。","duanluojiexi":"对上一段进行总结，同时引出下文。"},{"kewen":"⑦ 所以，我愿意坐在自己的船里，一遍又一遍地读那本书。【每遍读都会有不同的发现和体会，所以“我”要“一遍又一遍”地读。】首先我会思考，故事中的人为什么这样做，作家为什么要写这个故事。然后，我会在脑子里继续把这个故事编下去，回过头来品味我最欣赏的一些片段，并问问自己为什么喜欢它们。我还会再读其他部分，并从中找到我以前忽略的东西。做完这些，我会把从书中学到的东西列个单子。最后，我会想象作者是什么样的，他会有怎样的生活经历……这真像与另一个人同船而行。  【列举了“一遍又一遍地读那本书”的方法，并发出由衷的感叹，与文题相呼应。】","duanluojiexi":"以自己为例，说明从不同角度去读同一本书，会有不同的感受。","remark":"第二部分（④~⑦）：层层深入地阐述了自己会选择书作为伴侣的理由。"},{"kewen":"⑧ 一本你喜爱的书就是一位朋友，也是一处你随时想去就去的故地。【“故地”说明读过多遍，“想去就去”指想读就读。】从某种意义上说，它是你自己的东西，因为世上没有两个人会用同一种方式读同一本书。【不同的人读书会有不同的见解，要用心去揣摩和体会。】","duanxi":"每个人都有属于自己个性化的读书方式，收获也各不相同。","beizhu":"第三部分（⑧）：深化主题，总结全文，阐明自己对书的理解，说明书是属于自己的伴侣。"}]},"kewenjiegou":{"title":"课文结构","titleImg":"img/title_kewenjiegou.jpg","id":"kewenjiegou","jiegoutushi":{"title":"结构图示","titleImg":"img/icon_jiegoutushi.jpg","img":"img/jiegoutushi_3_001.jpg"},"zhutilingwu":{"title":"主题领悟","titleImg":"img/icon_zhutilingwu.jpg","contents":["本文作者通过阐述独自环游世界时选择以书为伴的缘由，表达了作者对书的挚爱。"]},"xiezuotedian":{"title":"写作特色","titleImg":"img/icon_xiezuotese.jpg","contents":["1． 本文是一篇说理性散文，“形散神不散”是本文的特点，全篇紧紧围绕“以书为侣”“读书爱书”展开叙述。","2． 通篇运用假设。文中虽没有人物对话，但在作者的假设中却有着充满情感色彩的问答甚至辩论，字里行间洋溢着作者对书的热爱之情。","3． 作者运用设问、反问等修辞方法，尤其运用一系列鲜活的比喻，增强了文字的表达效果。"]}},"hudongtiwen":{"title":"互动提问","titleImg":"img/title_hudongtiwen.jpg","id":"hudongtiwen","contents":[{"question":"1. 阅读课文，说说作者选择一本书陪伴自己旅行伴侣的原因?","answer":" 作者选择一本书陪伴自己，源于对书的喜爱，因为作者认为书就如同自己的朋友和家，是让人珍视的事物，而且每次读书都会有收获，哪怕是同一本书每读一次都会有不同的收获，书带给人们精神上的满足与享受。"},{"question":"2.从文章中你学会了怎样看书？","answer":"我了解了看书是个人行为，每个人看书得到的思想和体会都是不同的，我要仔细去看，认真去读，一遍一遍地翻阅，从中发现新的东西，最终将自己的所想所得内化成属于自己的东西。"}]}}



