/**
 * javascript 单例模式的实现方式
 */
var jsLazySingletondsdf =(function(){

    var instance;
    //利用闭包来解决私有构造函数的问题(后面有解释)
    function init (){
        return {
            property: 'some thing',
            method: function(){}
        }
    }

    return {
        getInstance :function(){
            //如果instance存在则返回，不存在则调用init()
            return instance || instance = init();
        }
    }

})();