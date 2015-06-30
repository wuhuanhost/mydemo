function aabbcc(callback) {
	$.ajax({
		type : 'post',// 可选get.post
		url : 'http://192.168.1.123/1.txt',// 这里是接收数据的PHP程序+'&page='+window.location.href
		data : 'a=' + "dsds",// 'uid='+uid传给jsp的数据，多个参数用&连接
		dataType : 'txt',// 服务器返回的数据类型 可选XML ,Json jsonp script
		// html
		// text等
		async : false,// false表示同步,true表示异步
		success : function(msg) {
			// 这里是ajax提交成功后，后台程序返回的数据处理函数。msg是返回的数据，数据类型在dataType参数里定义！
			callback(msg);
		},
		error : function() {
			console.log("error");
		}
	});
}

