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
        //获取文本数据
        this.getTxtData(this.param.txtUrl, function() {



        });

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
                    _this.txtDataArr = data.split(/\n/);
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




    }

    /**
     * 初始化方法
     * @param  {[type]} param [description]
     * @return {[type]}       [description]
     */
    book.prototype.init = function(param, callback) {

    };

    return book;
})();


var book = new Book({
    "txtUrl": "http://localhost:9696/txt/test.txt",
    "styleUrl": "http://localhost:9696/txt/book.style"
});
// console.log(book.param.abc);
