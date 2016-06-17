/**
*从字符串的末尾每次删除一个字符
**/
function delStr(str,sum){
	var arr=_.toArray(str);
	var delArrByRight=_.dropRight(arr,sum);
	var rightStr=_.slice(arr,(arr.length-sum),arr.length);
	var param={
		"str":str,
		"leftStr":_.toString(delArrByRight).replace(/,/g,""),
		"rightRight":_.toString(rightStr).replace(/,/g,""),
		"sum":sum
	}
	return param;

}



function del(str){
	var b=true;
	var index=1;

		delStr("123456",index);
		index++;

	

}

del("123456");