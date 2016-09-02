/**
 * fun
 */
var talk = (function() {
    var talk  = {};
    talk.init = function(data) {
        this.type       = data.type;
        this.title      = data.title;
        this.titleImg   = data.titleImg;
        this.titleStyle = data.title_style;
        this.contents   = data.contents;
        this.style      = data.style;
        this.button     = data.button;
    };

    talk.genHtml = function(index) {
        var r1 = new RegExp(re.titleImg);

        var divBlock = document.createElement("div");
        divBlock.setAttribute("class", "block talk");
        divBlock.setAttribute("id", index);
        var titleLine    = document.createElement("p");
        var titleSpan    = document.createElement("span");
        var titleImgSpan = document.createElement("span");
        //标题是title_开头
        if (r1.test(this.titleImg)) {
            var img = document.createElement("img");
            img.setAttribute("src", this.titleImg);
            titleLine.appendChild(img);
        } else { //标题不是title开头
            if (this.titleImg != "" && this.title != "") { //标题图片都有
                var img = document.createElement("img");
                img.setAttribute("src", this.titleImg);
                titleImgSpan.appendChild(img);
                titleSpan.innerHTML = this.title;
            } else if (this.titleImg == "" && this.title != "") { //只有标题
                titleSpan.innerHTML = this.title;
            }
        }

        var button1       = document.createElement("span");
        button1.innerHTML = "显示全部";
        button1.setAttribute("class", "button button-default-showAll");
        button1.onclick = function() {
            ToggleAlls1(index);
        }
        var button2       = document.createElement("span");
        button2.innerHTML = "隐藏全部";
        button2.onclick   = function() {
            ToggleAlls2(index);
        }

        button2.setAttribute("class", "button button-default-hideAll");

        titleLine.appendChild(titleImgSpan);
        titleLine.appendChild(titleSpan);

        titleLine.appendChild(button1);
        titleLine.appendChild(button2);

		if(this.button!=undefined&&this.button!=null){
		    	var button3       = document.createElement("span");
		        button3.innerHTML = this.button.text;
		 		button3.setAttribute("class", "button button-default-hudongketang");
		 		titleLine.appendChild(button3);
				var href=this.button.link; 
		 		button3.addEventListener("click", function(){
		 			window.location.href=href;	
		 		});
		}
		
        divBlock.appendChild(titleLine);

        if (this.titleStyle != "" && this.titleStyle != undefined) {
            titleSpan.setAttribute("style", this.titleStyle);
        }
        var contentLine;
        //生成内容
        for (var i = 0; i < this.contents.length; i++) {
            contentLine = document.createElement("p");
            if (this.style != "" && this.style != undefined) {
                contentLine.setAttribute("style", this.style);
            }
            //字符串类型         
            if (typeof(this.contents[i]) == "string") {
                if (/阅读与理解/.test(this.contents[i])) {
                    contentLine.innerHTML = "<img src='img/title_yueduyulijie.jpg'/>";
                } else if (/分析与解答/.test(this.contents[i])) {
                    contentLine.innerHTML = "<img src='img/title_fenxiyujieda.jpg'/>";
                } else if (/回顾与反思/.test(this.contents[i])) {
                    contentLine.innerHTML = "<img src='img/title_huiguyufansi.jpg'/>";
                } else if (re.matchImg.test(this.contents[i])) {
                    contentLine.innerHTML = "<img src='" + this.contents[i].match(re.matchImg)[1] + "'/>";
                } else if (/^小贴士/.test(this.contents[i])) {
                    contentLine.innerHTML = "<div class='xiaotieshi'>" + this.contents[i].replace(/^小贴士[:：]/, "<span class='xiaotieshi-title'>小贴士:</span> ") + "</div>";
                } else {
                    contentLine.innerHTML = "<div style='width:100%;text-indent: 2em;'>" + this.contents[i] + "</div><div style='clear:both'></div>";
                }
            } else { //对象类型
                var temps = "";
                //是对话
                if (this.contents[i].title != undefined) {
                    for (var j = 0; j < this.contents[i].data.length; j++) {
						if(/^小贴士/.test(this.contents[i].data[j]))
						{
							temps+="<div class='xiaotieshi'>" + this.contents[i].data[j].replace(/^小贴士[:：]/, "<span class='xiaotieshi-title'>小贴士:</span> ") + "</div>";
						}
						else if(j==this.contents[i].data.length-1)
						{
							temps += this.contents[i].data[j];
						}
						else
						{
							temps += this.contents[i].data[j] + "<br>";
						}
                    }
					temps=temps.replace(/【方法探究】/g,"<span style='color:#0000ff'><b>【方法探究】</b></span>");
					temps=temps.replace(/【规范解答】/g,"<span style='color:#0000ff'><b>【规范解答】</b></span>");
                    if (this.contents[i].title.replace(/[:：]/, "") == "博士") {
                        contentLine.innerHTML = "<div style='width:100%;min-height:30px;'><div style='width:80px;float:left;' ><img src='img/icon_boshi.jpg'/></span></div><div style='line-height:30px;float:left;width:720px;'>" + temps + "</div></div><div style='clear:both'></div>";
                    }else if (this.contents[i].title.replace(/[:：]/, "") == "博士说") {
                        contentLine.innerHTML = "<div style='width:100%;min-height:30px;' onclick=ToggleByIds(this,'" + index + "-" + i + "')><div style='width:80px;float:left;' ><img src='img/icon_boshi.jpg'/></span></div><div class='jiaohuTexts' id=\"" + index + "-" + i + "\"  style='opacity:1;width:720px;float:left;line-height:30px;display:none;'><span style='color:#0c68d0'>" + temps + "</span></div></div><div style='clear:both'></div>";
                    } else if (this.contents[i].title.replace(/[:：]/, "") == "乐乐") {
                        contentLine.innerHTML = "<div style='width:100%;min-height:30px;' onclick=ToggleByIds(this,'" + index + "-" + i + "')><div style='width:80px;float:left;' ><img src='img/icon_lele.jpg'/></span></div><div class='jiaohuTexts' id=\"" + index + "-" + i + "\"  style='opacity:1;width:720px;float:left;line-height:30px;display:none;'><span style='color:#0c68d0'>" + temps + "</span></div></div><div style='clear:both'></div>";
                    } else if (this.contents[i].title.replace(/[:：]/, "") == "享享") {
                        contentLine.innerHTML = "<div style='width:100%;min-height:30px;' onclick=ToggleByIds(this,'" + index + "-" + i + "')><div style='width:80px;float:left;' ><img src='img/icon_xiangxiang.jpg'/></span></div><div class='jiaohuTexts' id=\"" + index + "-" + i + "\"  style='opacity:1;width:720px;float:left;line-height:30px;display:none;'><span style='color:#0c68d0'>" + temps + "</span></div></div><div style='clear:both'></div>";
                    }
                } else { //回顾与反思
                    var huigufansiTemp = "";
                    for (var j = 0; j < this.contents[i].length; j++) {
						if(j==this.contents[i].length-1)
						{
							huigufansiTemp += this.contents[i][j];
						}
						else
						{
							huigufansiTemp += this.contents[i][j] + "<br>";
						}
                    }
                    contentLine.innerHTML = "<div class='huigufansiContent'>" + huigufansiTemp + "</div>";
                }
            }
            divBlock.appendChild(contentLine);
        }
        $("#html").append(divBlock);
    };

    return talk;

})();
