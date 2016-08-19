var re = {};

//匹配图片名称以title_开头
re.titleImg = /title_/;

//匹配一对{{img/aabc.jpg}}中的图片连接
re.matchImg = /\{\{(.*?)\}\}/;

//匹配汉字开头后面跟一个冒号
re.matchHanzi = /^[\u4e00-\u9fa5]{2,10}[:：]/;

//匹配echo开头的行
re.matchEcho = /^[a-zA-Z]{4,10}[:：]/;

//匹配括号中的内容
re.matchBrackets = /[\(\（](.*?)[\）\)]/g;

//匹配括号中紧跟数字没有空格
re.matchBracketsNoBreak = /[\(\（]\d{1,2}[\）\)]/;

//匹配括号(（@任意字符@）)
re.matchBracketsaaa=/[\(\（]@.*?@[\）\)]/;

//匹配__dadsa__格式数据
re.matchUnderline=/@@@.*?@@@/g;

//匹配（复习题）（预习题）
re.matchBracketsHanzi = /[\(\（]复习题|预习题[\）\)]/;

//匹配阅读与理解，分析与解答，回顾与反思
re.matchTitleHanzi = /[\(\（]阅读与理解|分析与解答|回顾与反思[\）\)]/;

//根据id显示或者隐藏对应的
function ToggleById(event, id) {
    window.event.stopPropagation();
    if ($("#" + id).css("opacity") == 0) {
        $("#" + id).css("opacity", 1);

    } else {
        $("#" + id).css("opacity", 0)
    }
};


function ToggleByIds(event, id) {
    window.event.stopPropagation();
    if ($("#" + id).css("display") == "none") {
        $("#" + id).show();
    } else {
        $("#" + id).hide();
    }
};





//显示全部或者隐藏全部
function ToggleAll(id) {
    if ($("#" + id + " .jiaohuText").css("opacity") == 0) {
        $("#" + id + " .jiaohuText").css("opacity", 1);

    } else {
        $("#" + id + " .jiaohuText").css("opacity", 0);
    }
};



function ToggleAlls1(id) {

    $("#" + id + " .jiaohuTexts").show();
    $("#" + id + " .jiaohuText").css("opacity", 1);

};


function ToggleAlls2(id) {


    $("#" + id + " .jiaohuTexts").hide();
    $("#" + id + " .jiaohuText").css("opacity", 0);

};







//你的世界就是这样子的你种地啊
