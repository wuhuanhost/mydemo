var Action={
	   secondNumber:0,
       threeNumber:0,
       oneNumber:0,
       flag:0,
       arr:[],
       footer:" <footer data-am-widget='footer' class='am-footer am-footer-default' id='footer'><div class='am-footer-miscs'><p>由 <a href='#' title='马上网络' target='_blank' >马上网络</a> 提供技术支持</p><p>CopyRight&copy;2014 AllMobilize Inc.</p></div></footer>",

        init:function(da){
          	//初始化方法
          	//
          	//
          	//
          	//
			alert(da);

        },
		/**
		 * 随机获取一个三位数
		 * @return {[type]} [description]
		 */
        getThreeNumber:function(){
			var number=parseInt(Math.random()*1000);
			if(number>1000||number<100){
				number=parseInt(Math.random()*1000);

			}
				Action.threeNumber=number;
		//alert(number);
		},

		/**
		 * 随机获取一个两位数
		 * @return {[type]} [description]
		 */
		getSecondNumber:function(){
			var number=parseInt(Math.random()*100);
			if(number>100||number<10){
				number=parseInt(Math.random()*100);

			}
			Action.secondNumber=number;
			//alert(number);
		},

		/**
		 * 随机获取一个一位数
		 * @return {[type]} [description]
		 */
		getOneNumber:function(){
			var number=parseInt(Math.random()*10);
			if(number>10||number<=0){
				number=parseInt(Math.random()*10);

			}
			Action.oneNumber=number;
		//alert(number);
		},
		/**
		 * [count description]
		 * @return {[type]} [description]
		 */
		_chengfa:function(number1,number2,result,sum,cur){ 

				$("#footer").remove();
              
               $("#d5").html(number1);
               $("#d4").html("×");
               $("#d3").html(number2);
               //$("#express").html("请输入 "+number1+"×"+number2+" 的答案");
			   $("#express").html("请输入你的答案");
               $("#result").val(result);
               $("#sum").html(sum);
               $("#cur").html(cur);
               $("#content").after(Action.footer);

     	},		
     	/**
		* [count description]
		* @return {[type]} [description]
		*/
		_chufa:function(number1,number2,result,sum,cur){  		  
              
               $("#footer").remove();

               $("#d5").html(number1);
               $("#d4").html("÷");
               $("#d3").html(number2);
              //$("#express").html("请输入 "+number1+"÷"+number1+" 的答案");
               $("#express").html("请输入你的答案");
               $("#result").val(result);
               $("#sum").html(sum);
               $("#cur").html(cur);
               $("#content").after(Action.footer);
          } ,

         _init:function(){

            var item=new Array();

            for(var iii=1;iii<=10;iii++){
				   Action.getThreeNumber();
				   Action.getSecondNumber();
                   var index={};
                  
                   index.index=iii;
                 
            	if(iii%2==0){//乘法
                   if(Action.threeNumber%Action.secondNumber!=0){
		             	Action.threeNumber=Action.threeNumber-(Action.threeNumber%Action.secondNumber);
		           } 
		            index.number1=Action.threeNumber;
                   	index.number2=Action.secondNumber;
		           	index.result= Action.threeNumber/Action.secondNumber;
		           	index.expression=Action.threeNumber+"÷"+Action.secondNumber+"="+Action.threeNumber/Action.secondNumber;
		           	index.answer="";
					item.push(index);
            	}else{//除法
            		index.number1=Action.threeNumber;
                   	index.number2=Action.secondNumber;
					index.result= Action.threeNumber*Action.secondNumber;
					item.push(index);
					index.expression=Action.threeNumber+"×"+Action.secondNumber+"="+Action.threeNumber*Action.secondNumber;
					index.answer="";
            	}

            }


			return item;

         }
     	


}