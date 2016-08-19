/**
 * fun
 */
var text = (function() {
    var t = {};
    t.init = function(data) {
        this.type = data.type;
        this.title = data.title;
        this.titleImg = data.titleImg;
        this.titleStyle = data.title_style;
        this.contents = data.contents;
        this.style = data.style;
    };

    t.genHtml = function(index) {
        var r1 = new RegExp(re.titleImg);

        var divBlock = document.createElement("div");
        divBlock.setAttribute("class", "block text");
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


        titleLine.appendChild(titleImgSpan);
        titleLine.appendChild(titleSpan);
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
			console.log(this.contents[i])
			 this.contents[i]= this.contents[i].replace(/^重点/,"<img src='img\\icon_add_1.jpg' />重点");
		     this.contents[i]= this.contents[i].replace(/^难点/,"<img src='img\\icon_add_2.jpg' />重点");
            //替换内容中{{img/abc.jpg}}为<img src='abc.jpg'/>
            contentLine.innerHTML = this.contents[i].replace(re.matchImg, function(str, str1) {
                return "<img src='" + str1 + "' width='100%'/>";
            });

            divBlock.appendChild(contentLine);
        }

        t.html = "";
        t.html = divBlock.innerHTML;
        $("#html").append(divBlock);
        $("#html").append("<hr/>");
    };

    return t;

})();
