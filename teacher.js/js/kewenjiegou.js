var kewenjiegou = (function() {

	var kewenjiegou = {};

	kewenjiegou.init = function(data) {


		console.log(data);


		this.titleImg = data.titleImg;
		this.title = data.title;
		this.jiegoutushi = data.jiegoutushi;
		this.arr1 = data.zhutilingwu;
		this.arr2 = data.xiezuotedian;
		this.id=data.id;




	};





	kewenjiegou.genHtml = function() {

		var html = "<br/><h3 id='"+this.id+"'><img src='" + this.titleImg + "' width='150px'/></h3><img src='" + this.jiegoutushi.img + "' style='margin-top:10px;'/>";

		var arr1 = "";
		for (var i = 0; i < this.arr1.contents.length; i++) {

			arr1 += "<p class='chinese'>" + this.arr1.contents[i] + "</p>";

		}

		arr1 = "<h4><img src='" + this.arr1.titleImg + "' width='21px'/>" + this.arr1.title + "</h3>" + arr1;

		var arr2 = "";

		for (var j = 0; j < this.arr2.contents.length; j++) {

			arr2 += "<p class='chinese'>" + this.arr2.contents[j] + "</p>";

		}
		arr2 = "<h4><img src='" + this.arr2.titleImg + "' width='21px'/>" + this.arr2.title + "</h3>" + arr2;

		kewenjiegou.html = "";
		kewenjiegou.html = html + arr1 + arr2;


	};




	return kewenjiegou;



})();