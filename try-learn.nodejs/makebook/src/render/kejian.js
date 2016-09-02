 $(document).ready(function() {
        $("#remark").on("click", function() {
            showRemarkImg();
        });
        $("#content-kejian").click(function() {
            section.next();
        })
    });

    var audio = $("#audio")[0];

    function playVideo() {
        audio.load();
        audio.play();
    }

    function stopVideo() {
        audio.pause();
    }

    /**
     * 显示备注图片

     * @return {[type]} [description]
     */
    function showRemarkImg() {
        $(".remarkImg-current img").show(0, function() {
            $(".remarkImg-current").animate({
                "opacity": "1"
            }, 1000, function() {
                //console.log("图片显示完成!!!");
            });
        });
    }

    function showImg() {
        $(".img").fadeIn(100);
    }

    /**
     * 打字机
     * @return {[type]} [description]
     */
    function typing(callbacks) {
        //打字机效果
        $('#text').typing({
            range: 10,
            repeat: false
        }, function() {
            //showRemarkImg();
            console.log("字已经打完~~~")
                //stopVideo();
            callbacks();
        });
    }

    
    //
    var section = (function() {
        var section = {};
        //初始化
        section.init = function(param) {
            section.data = param;
            section.indexMax = param.length - 1;
            section.index = 0;
            section.drawHtml();
            section.clickState = true; //按钮禁止点击

        };
        //下一页
        section.next = function() {
            if (section.clickState) {
                if (section.index < section.indexMax) {
                    section.index += 1;
                }
                section.drawHtml();
            }
        };
        //上一页
        section.prev = function() {
            if (section.clickState) {
                if (section.index >= 1) {
                    section.index -= 1;
                }
                section.drawHtml();
            }
        };
        //显示对话的过程
        section.dialogueAnimate = function(param) {
            $("#text").html("");
			$("#text").css("font-family","楷体");
            $("#pages").hide();
            $("#texts").val(param.content[0]);

            $("#dialogue-bk-current").css("background", "url('" + param.avtor + "')");
            $("#dialogue-bk-current").animate({
                "opacity": 1
            }, 100, function() {
                $("#dialogue-bk-current").css("opacity", 0);
                $("#dialogue-bk").css("background", "url('" + param.avtor + "')");
                typing(function() {
                    section.clickState = true;
                });
            });
        };
        //显示图片的过程
        section.remarkAnimate = function(param) {
            $(".remarkImg-current").html();
            $(".remarkImg-current").html("<img src='" + param.content + "'/>");
            $(".remarkImg-current,.remarkImg-current img").animate({
                "opacity": 1
            }, 1000, function() {
                $(".remarkImg-current").css("opacity", 0);
                $(".remarkImg").html("<img src='" + param.content + "'/>");
            });
        };
        section.roleStyle = function(param) {
            if (param.role == "博士") {
                $("#dialogue-content").attr("class", "");
                $("#dialogue-content").attr("class", "dialogue-content-boshi");
            } else if (param.role == "乐乐") {
                $("#dialogue-content").attr("class", "");
                $("#dialogue-content").attr("class", "dialogue-content-lele");
            } else if (param.role == "享享") {
                $("#dialogue-content").attr("class", "");
                $("#dialogue-content").attr("class", "dialogue-content-xiangxiang");
            }
        };
		section.destory=function(){
			section=null;
		};
        //渲染引擎方法
        section.drawHtml = function() {
            section.clickState = false;
            var _data = section.data[section.index];
			console.log(section.index)
            if (_data.length <= 1) { //一个一个显示
                if (_data[0].type == "dialogue") {
                    section.dialogueAnimate(_data[0]);
                    section.roleStyle(_data[0]);
                } else if (_data[0].type == "remark") {
                    section.clickState = true;
                    section.remarkAnimate(_data[0]);
                } else if (_data[0].type == "start" || _data[0].type == "end") {
                    section.clickState = true;
                    console.log(section.clickState);
                    $("#pages").html("<img src='" + _data[0].content[0] + "'/>");
                    $("#pages").fadeIn();
                }
            } else { //同时显示
                section.roleStyle(_data[0]);
                section.dialogueAnimate(_data[0]);
                section.remarkAnimate(_data[1]);
            }
        };
        return section;

    }());
