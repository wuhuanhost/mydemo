/**
 * fun
 */
var jiaohu = (function() {
    var j = {};
    j.init = function(data) {
        this.type = data.type;
        this.title = data.title;
        this.titleImg = data.titleImg;
        this.titleStyle = data.title_style;
        this.contents = data.contents;
        this.style = data.style;
    };

    j.genHtml = function(index) {
        var r1 = new RegExp(re.titleImg);

        var divBlock = document.createElement("div");
        divBlock.setAttribute("class", "block jiaohu");
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
                img.setAttribute("src", this.titleImg);
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

            if (typeof(this.contents[i]) == "string") {
                contentLine.innerHTML = "<span>" + this.contents[i] + "</span>";
            } else {

                var temps = "";
                for (var j = 0; j < this.contents[i].data.length; j++) {
                    temps += this.contents[i].data[j] + "<br>";
                }
				var w=this.contents[i].title.length>2?this.contents[i].title.length*18:this.contents[i].title.length*36;
				var w2=790-w;
                // contentLine.innerHTML = "<span onclick=ToggleById(this,'" + index + "-" + i + "')>" + t + "</span><span class='jiaohuText' style='opacity:0' id=\"" + index + "-" + i + "\">" + line + "</span>";
                contentLine.innerHTML = "<div style='width:100%;' onclick=ToggleByIds(this,'" + index + "-" + i + "')><div style='width:"+(w+10)+"px;float:left;color:#247a37;font-weight:bold;' >" + this.contents[i].title.replace(/.*/gi,function(r1,r2){
				
				if(r1==="分析"){
				  return "<img src='img/icon_fenxi.jpg'/>  ";
				}else if(r1==="解答"){
				
					return "<img src='img/icon_jieda.jpg'/>"+r1; 
				
				}else{
				
					return r1;
				}
								
				}) + ":</div><div class='jiaohuTexts' id=\"" + index + "-" + i + "\"  style='opacity:1;width:"+w2+"px;float:left;display:none;'>" + temps + "</div></div><div style='clear:both'></div>";
            }
            divBlock.appendChild(contentLine);
        }

        // console.log(divBlock)al

        j.html = "";
        j.html = divBlock.innerHTML;
        $("#html").append(divBlock);
        $("#html").append("<hr/>");
    };

    return j;




})();
