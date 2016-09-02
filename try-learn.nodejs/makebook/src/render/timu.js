/**
 * fun
 */
var timu = (function() {
    var timu = {};
    timu.init = function(data) {
        this.type = data.type;
        this.title = data.title;
        this.titleImg = data.titleImg;
        this.titleStyle = data.title_style;
        this.contents = data.contents;
        this.style = data.style;
    };

    timu.genHtml = function(index) {
        var r1 = new RegExp(re.titleImg);

        var divBlock = document.createElement("div");
        divBlock.setAttribute("class", "block timu");
        divBlock.setAttribute("id", index);
        var titleLine = document.createElement("p");
        var titleSpan = document.createElement("span");
        var titleImgSpan = document.createElement("span");
        //标题是title_开头
        if (r1.test(this.titleImg)) {
            var img = document.createElement("img");
            img.setAttribute("src", this.titleImg);
            titleLine.appendChild(img);
        } else { //标题不是title开头
            if (this.titleImg != "" && this.title != "") { //标题图片都有
                var img = document.createElement("img");
                img.setAttribute("src", this.titleImg.replace("&nbsp;",""));
                titleImgSpan.appendChild(img);
                titleSpan.innerHTML = this.title;
            } else if (this.titleImg == "" && this.title != "") { //只有标题
                titleSpan.innerHTML = this.title;
            }
        }

        var button1 = document.createElement("span");
        button1.innerHTML = "显示全部";
        button1.setAttribute("class", "button button-default-showAll");
        button1.onclick = function() {
            ToggleAlls1(index);
        }
        var button2 = document.createElement("span");
        button2.innerHTML = "隐藏全部";
        button2.onclick = function() {
            ToggleAlls2(index);
        }
        button2.setAttribute("class", "button button-default-hideAll");




        titleLine.appendChild(titleImgSpan);
        titleLine.appendChild(titleSpan);

        titleLine.appendChild(button1);
        titleLine.appendChild(button2);
        divBlock.appendChild(titleLine);

        if (this.titleStyle != "" && this.titleStyle != undefined) {
            titleSpan.setAttribute("style", this.titleStyle);
        }

        //生成内容
        for (var i = 0; i < this.contents.length; i++) {
            var contentLine = document.createElement("p");
            if (this.style != "" && this.style != undefined) {
                contentLine.setAttribute("style", this.style);
            }
			

            //是字符串
            if (typeof(this.contents[i]) == "string") {
				console.log("string");

                var replaceUnderline=this.contents[i];

		        var k=100000;

                //括号中的做交互
                var brackets = "";
                var temp1 = replaceUnderline.match(re.matchBrackets);
                if (temp1 != null) {
                    for (var j = 0; j < temp1.length; j++) {
						//console.log(re.matchBracketsaaa.test(temp1[j])+"    "+temp1[j]);

                        //匹配括号中紧跟数字，没有空格
                        if (re.matchBracketsNoBreak.test(temp1[j])||re.matchBracketsaaa.test(temp1[j])) {

                           replaceUnderline = replaceUnderline.replace(temp1[j], "(" + temp1[j].replace(")", "").replace("(", "").replace("）", "").replace("（", "") + ")").replace(/[\(\（]@/g,"(").replace(/@[\）\)]/g,")");

                        } else if (re.matchBracketsHanzi.test(temp1[j])) {
                           replaceUnderline = replaceUnderline.replace(temp1[j], "(" + temp1[j].replace(")", "").replace("(", "").replace("）", "").replace("（", "") + ")");

                        } else {

                            replaceUnderline = replaceUnderline.replace(temp1[j], "(<span onclick=ToggleById(this,'" + index + "-" + i + "-" + j + "') class='jiaohuText' style='opacity:0' id=\"" + index + "-" + i + "-" + j + "\">" + temp1[j].replace(")", "").replace("(", "").replace("）", "").replace("（", "") + "</span>)");
                        }
                    }
                 
                }

				//下划线做交互
		
				 replaceUnderline=replaceUnderline.replace(/@@@.*?@@@/g,function(para){
				 var txt="<div style='display:inline-block;border-bottom:1px solid #000000;'><span id=\"" + index + "-" + i + "-" + k + "\" style='opacity:0' class='jiaohuText' onclick=ToggleById(this,'" + index + "-" + i + "-" + k + "')>&nbsp;&nbsp;&nbsp;"+para.replace(/@@@/g,"")+"&nbsp;&nbsp;&nbsp;</span></div>"
				 k+=1;
				 return txt;
				 
				 
				 });


					contentLine.innerHTML = replaceUnderline;


            } else { //是数组
                var temps = "";
                for (var j = 0; j < this.contents[i].length; j++) {
                    if(j==this.contents[i].length-1)
					{
						temps += this.contents[i][j];
					}
					else
					{
						temps += this.contents[i][j]+"<br>";
					}
                }
                contentLine.innerHTML = "<div style='width:100%;min-height:35px;' onclick=ToggleByIds(this,'" + index + "-" + i + "')><div style='width:75px;float:left;min-height:35px;line-height:35px;' ><img src='img/icon_cursor1.jpg'/></span></div><div class='jiaohuTexts' id=\"" + index + "-" + i + "\"  style='opacity:1;width:720px;float:left;line-height:35px;display:none;'>" + temps + "</div></div><div style='clear:both'></div>";
            }
            divBlock.appendChild(contentLine);
        }

        // console.log(divBlock)al

        timu.html = "";
        timu.html = divBlock.innerHTML;
        $("#html").append(divBlock);
        $("#html").append("<hr/>");
    };

    return timu;

})();
