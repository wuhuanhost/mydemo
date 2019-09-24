DateFormat = (function() {
	var SIGN_REGEXP = /([yMdhHsm])(\1*)/g;
	var DEFAULT_PATTERN = 'yyyy-MM-dd';
	function padding(s, len) {
		var len = len - (s + '').length;
		for (var i = 0; i < len; i++) {
			s = '0' + s;
		}
		return s;
	};
	return ({
		format : function(date, pattern) {// 日期格式化方法
			pattern = pattern || DEFAULT_PATTERN;
			return pattern.replace(SIGN_REGEXP, function($0) {
						switch ($0.charAt(0)) {
							case 'y' :
								return padding(date.getFullYear(), $0.length);
							case 'M' :
								return padding(date.getMonth() + 1, $0.length);
							case 'd' :
								return padding(date.getDate(), $0.length);
							case 'h' :
								return padding(date.getHours(), $0.length);
							case 'H' :
								return padding(date.getHours(), $0.length);
							case 'm' :
								return padding(date.getMinutes(), $0.length);
							case 's' :
								return padding(date.getSeconds(), $0.length);
						}
					});
		},
		parse : function(dateString, pattern) {// 日期格式的字符串转换为日期对象的方法
			var matchs1 = pattern.match(SIGN_REGEXP);
			var matchs2 = dateString.match(/(\d)+/g);
			if (matchs1.length == matchs2.length) {
				var _date = new Date(1970, 0, 1);
				for (var i = 0; i < matchs1.length; i++) {
					var _int = parseInt(matchs2[i]);
					var sign = matchs1[i];
					switch (sign.charAt(0)) {
						case 'y' :
							_date.setFullYear(_int);
							break;
						case 'M' :
							_date.setMonth(_int - 1);
							break;
						case 'd' :
							_date.setDate(_int);
							break;
						case 'h' :
							_date.setHours(_int);
							break;
						case 'm' :
							_date.setMinutes(_int);
							break;
						case 's' :
							_date.setSeconds(_int);
							break;
					}
				}
				return _date;
			}
			return null;
		}
	});
})();