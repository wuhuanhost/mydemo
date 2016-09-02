$.fn.typing = function(n,callback){
	// 默认选项
	var options = {
		speed	: 40,		// 打字速度
		range	: 100,		// 打字速度波动的范围
		repeat	: false,		// 是否重复 
		flashback : false,	// 是否倒叙返回
		flicker	: false		// 是否闪烁
	}
	$.extend(options,n);
	
	var _this = $(this);
	var str = $("#texts").val().split(''); //分割字符串
	var index = 0; // 当前索引
	var direction = 1; // 1为正向，-1为反方向
	// 将分割后的字符串装入数组
	$(str).each(function(i,k){
		str[i] = (str[i-1] ? str[i-1] : '') + str[i];
	});
	// 设置边框模拟光标
	_this.css('border-right','0px solid #000');
	
	// 启动定时器，开启打字效果
	setTimeout(init,options.speed);
	
	// 初始化函数
	function init(){

		_this.text(str[index]);
		
		// 如果运行到最后,且开启了重复
		if(index >= (str.length-1) && options.repeat){
			// 如果设置了倒叙则变换方向
			if(options.flashback){
				direction = -1; // 变换方向为负方向
			}else{
				index = 0;
			}
			// 如果设置了闪烁则启用闪烁效果
			if(options.flicker){
				_this.delay(200).fadeOut(1).delay(400).fadeIn(1).delay(200).fadeOut(1).delay(400).fadeIn(1);
			}
			setTimeout(init,2000);
		
		// 如果运行到最后但未开启重复
		}else if( index >= (str.length-1) && !options.repeat ){
			//运行到最后执行回调函数

			setTimeout(callback,300);

			// 如果设置了闪烁则启用闪烁效果
			if(options.flicker){
				_this.delay(200).fadeOut(1).delay(400).fadeIn(1).delay(200).fadeOut(1).delay(400).fadeIn(1);
			}
			// 移除光标样式
			_this.css('border-right','');
		
		// 如果倒回到开始
		}else if(index < 0 ){
			index = 0;
			direction = 1; // 变换方向为正方向
			setTimeout(init,Math.random()*options.range + options.speed);
		
		}else{
			setTimeout(init,Math.random()*options.range + options.speed);

		}
		
		index += direction;
	}
};