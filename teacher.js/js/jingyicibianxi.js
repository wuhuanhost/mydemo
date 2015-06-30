var jingyicibianxi = (function($) {


	var jingyicibianxi = {};




	jingyicibianxi.init = function(data) {
		this.arr = data.contents;
		this.titleImg = data.titleImg;
		this.title = data.title;

	};


	//显示或者隐藏单个
	jingyicibianxi.myClick = function(dom) {






	};

	//显示或者隐藏全部
	jingyicibianxi.showOrHideAll = function() {



		
		var c = $(".jingyicibianxi");
		var cc = c.css("color");
		//console.log(String(cc));

		if (cc == 'rgb(238, 238, 238)') {
			
			c.css("color", "#3190CD");
		} else {
			
			c.css("color", "#EEEEEE");
		}




	};





	jingyicibianxi.genHtml = function() {

		var html = "<h4><img src='" + this.titleImg + "' width='21px'/>" + this.title + "&nbsp;&nbsp;&nbsp;<button onclick='jingyicibianxi.showOrHideAll()'>显示全部</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style='background-color:#f05183' onclick='jingyicibianxi.showOrHideAll()'>隐藏全部</button></h3><br/>";

		var contents = "";
		for (var i = 0; i < this.arr.length; i++) {

			contents += "<label style='font-weight:bold;font-size:16px;color:green;'>" + this.arr[i].company1 + "</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style='font-weight:bold;font-size:16px;color:green;'>" + this.arr[i].company2 + "</label><p><label style='font-weight:bold;'>相同：</label>" + this.arr[i].xiangtong + "</p><p><label style='font-weight:bold;'>不同：</label>" + this.arr[i].butong + "</p><p><label style='font-weight:bold;cursor:pointer;'>造句：</label><br/><label >" + this.arr[i].zaoju.replace(/【/gi, "<span class='jingyicibianxi' onclick='jingyicibianxi.showOrHideAll()'>【").replace(/】/gi, "】</span>") + "</label></p>";



		}


		jingyicibianxi.html = html + "<div id='jingyicibianxi'>" + contents + "</div><p>&nbsp;</p>";

		//		
		//"<div id='jingyicibianxi'>
		//<label style='font-weight:bold;font-size:16px;color:green;'>担忧</label>
		//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style='font-weight:bold;font-size:16px;color:green;'>担心</label>
		//<p><label style='font-weight:bold;'>相同：</label>这两个词都含有不放心的意思。</p>	
		//<p><label style='font-weight:bold;'>不同：</label>“担忧”一词所表现的程度比“担心”要深，语意更重。</p>
		//<p><label style='font-weight:bold;cursor:pointer;'>造句：</label>
		//<label class='jingyicibianxi'>1.我担忧那本书会不会卖光。</label></p>
		//<p><label class='jingyicibianxi'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.天黑了，女儿还没回家，妈妈十分担心 。</label></p>
		//</div>");
		//		




	};




	return jingyicibianxi;


})(jQuery);