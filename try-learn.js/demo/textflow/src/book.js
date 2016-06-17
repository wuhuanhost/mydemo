/**
 * 电子书对象
 */
var Book = (function() {
    /**
     * 构造函数
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    function book(param) {
        this.param = param;
        //txt文本数据
        this.txtData = {};
        //按照换行符分割后的txt的数组
        this.txtDataArr = [];
        //每一页的数据
        this.pagingArr = [];
        //分好页的数据
        this.pageList = [];
        //文本解析规则
        this.txtParseRule = {
            "h1": {
                "rege": /^#h1 /,
                "txtParseFun": "getH1", //h1使用的解析方法
                "class": "h1" //h1使用的样式
            },
            "h2": {
                "rege": /^#h2 /,
                "txtParseFun": "getH2",
                "class": "h2"
            },
            "h3": {
                "rege": /^#h3 /,
                "txtParseRule": "getH3",
                "class": "class3"
            },
            "text": {
                "rege": /^#text /,
                "txtParseRule": "getText",
                "class": "text text-align"
            }
        };

        //初始化
        this.init();
    };
    /**
     * 获取数据
     * @param  {[type]}   url      [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    book.prototype.getTxtData = function(url, callback) {
        _this = this;
        if (url != "") {
            //根据txt链接加载txt数据
            $.get(url, function(data) {
                if (data !== "") {
                    _this.txtData = data;
                    _this.txtDataArr = _.filter(data.split(/\r\n/), function(text) {
                        //过滤掉数组中的空字符串
                        if (text != "") {
                            return text;
                        }
                    });
                    callback();
                }
            })
        }
    };
    /**
     * 加载css文件
     * @param  {[type]} styleUrl [description]
     * @return {[type]}          [description]
     */
    book.prototype.loadStyle = function(styleUrl) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = styleUrl;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    }

    /**
     * 初始化方法
     * @param  {[type]} param [description]
     * @return {[type]}       [description]
     */
    book.prototype.init = function(param, callback) {
        _this = this;
        //加载css文件
        this.loadStyle(this.param.styleUrl);
        //设置显示容器的宽度和高度
        $("#" + this.param.containerId).attr("style", "width:" + this.param.width + "px;");
        //获取文本数据
        this.getTxtData(this.param.txtUrl, function() {
            // console.log(_this.txtDataArr);
            //分析文本
            _this.processTxtArr(_this.txtDataArr);
        });
    };

    /**
     * 分析文本的方法
     * @param  {[type]} txtArr [description]
     * @return {[type]}        [description]
     */
    book.prototype.processTxtArr = function(txtArr) {
        var data = txtArr;
        var h = 0;
        var currentTxtType = ""; //当前解析文本的类型
        var currentClass = "";
        var currentRege = "";
        var currentFlowText = ""; //当前超出的文本段
        var flowText = ""; //溢出的文本字符串
        for (var i = 0; i < data.length; i++) {
            var flag = this.txtParseRule.h1.rege.test(data[i]) || this.txtParseRule.h2.rege.test(data[i]) || this.txtParseRule.text.rege.test(data[i]);
            //#h1 开头
            if (this.txtParseRule.h1.rege.test(data[i]) && currentFlowText == "") {
                currentTxtType = "h1";
                currentClass = this.txtParseRule.h1.class;
                currentRege = this.txtParseRule.h1.rege;
                //1、向容器中添加一个H1标签
                //2、判断容器的的高度是否超过了设置的最大高度
                h = this.getElement("h1", this.txtParseRule.h1.class, data[i], this.txtParseRule.h1.rege, this.param.containerId, i);
                this.checkHeight(h, data[i]);
                //#h2 开头
            } else if (this.txtParseRule.h2.rege.test(data[i]) && currentFlowText == "") {
                currentTxtType = "h2";
                currentClass = this.txtParseRule.h2.class;
                currentRege = this.txtParseRule.h2.rege;
                h = this.getElement("h2", this.txtParseRule.h2.class, data[i], this.txtParseRule.h2.rege, this.param.containerId, i);
                this.checkHeight(h, data[i]);
                //#text 开头
            } else if (this.txtParseRule.text.rege.test(data[i]) && currentFlowText == "") {
                currentTxtType = "p";
                currentClass = this.txtParseRule.text.class;
                currentRege = this.txtParseRule.text.rege;
                h = this.getElement("p", this.txtParseRule.text.class, data[i], this.txtParseRule.text.rege, this.param.containerId, i);
                this.checkHeight(h, data[i]);
            }
            //不以# 开头的字符串
            if (!flag && currentFlowText == "") {
                h = this.getElement(currentTxtType, currentClass, data[i], currentRege, this.param.containerId, i);
                var b = this.checkHeight(h, data[i]);
                if (b) {
                    currentFlowText = data[i];
                }
            }
            //currentFlowText不为空
            if (currentFlowText != "") {

                var index = 1;
                for (index; index < currentFlowText.length; i++) {
                    var obj = delStr(currentFlowText, index);
                    console.log(obj)
                    // h = this.getElement(currentTxtType, currentClass, obj.leftStr, currentRege, this.param.containerId, i);
                    // this.checkHeight(h, obj.leftStr);

                }
            }
        }

    };

    /**
     * 每添加一个元素后检查高度是否超过了设定的值
     * @param  {[type]} h [description]
     * @return {[type]}   [description]
     */
    book.prototype.checkHeight = function(h, data) {
        var flag = false; //是否超出
        //高度小于设置的高度
        if (h < this.param.height) {
            //数据添加到分页数组中
            this.pagingArr.push(data);
        } else {
            flag = true;
        }
        return flag;
    }

    /**
     * 创建一个新节点并且添加到容器中，返回容器的高度
     * @param  {[type]} elementType  [description]
     * @param  {[type]} elementClass [description]
     * @param  {[type]} elementText  [description]
     * @param  {[type]} rege         [description]
     * @param  {[type]} containerId  [description]
     * @param  {[type]} index        [description]
     * @return {[type]}              [description]
     */
    book.prototype.getElement = function(elementType, elementClass, elementText, rege, containerId, index) {
        var height = 0;
        var element = document.createElement(elementType);
        element.setAttribute("class", elementClass);
        element.innerHTML = elementText.replace(rege, "");
        $("#" + containerId).append(element);
        height = $("#" + containerId).height();
        return height;
    }

    return book;
})();


var book = new Book({
    "containerId": "book",
    "width": "600",
    "height": "720",
    "txtUrl": "http://localhost:9696/txt/test.txt",
    "styleUrl": "http://localhost:9696/static/css/book.css"
});
// console.log(book.param.abc);
