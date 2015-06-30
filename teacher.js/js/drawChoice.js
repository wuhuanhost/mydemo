/**
 * 选择题
 */

var drawChoice={

/**
* 变量列表
* @type {String}
*/
	 content:'',
	 description:'',
	 options:'',
	 answer:'',
	 expositiom:'',
	 index:'',
	 title:'',

	 contentHtml:'',
	 descriptionHtml:'',
	 optionHtml:'',
	 remarkHtml:'',
	 actionHtml:'',
	 titleHtml:'',
	 questionsHtml:'',

	 html:'',//生成的html
/**
 * 初始化方法
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
	init:function(data){
		//console.log(data.content)
		content=data.content;
	 	description=data.description;
	 	options=data.options;
	 	answer=data.answer;
	 	expositiom=data.expositiom;
	 	title=data.title;
	 	index=data.index;

	},
	
	
	/**
 *标题
 * @return {[type]} [description]
 */
	darwTitleHtml:function(){
		
		questionsHtml=index;
		
		if(title==""){
			titleHtml="";
		}else{
			titleHtml="<div class='title'>"+title+"</div>";
			
		}

	

	},
	
	
/**
 * 内容
 * @return {[type]} [description]
 */
	darwContentHtml:function(){
		
		if(content==""){
				contentHtml="";
		}else{
				contentHtml="<div class='content'>"+content+"</div>";
		}

	

	},
/**
 * 描述
 * @return {[type]} [description]
 */
	darwDescriptionHtml:function(){
		
		if(description==""){
			descriptionHtml="";
		}else{
			descriptionHtml="<div class='describe'><span>"+description+"</span></div>";
		}

		

	},
/**
 * 选项
 * @return {[type]} [description]
 */
	darwOptionHtml:function(){

		var optionSpan="";

          for(var i=0;i<options.length;i++){

				optionSpan+="<span>"+options[i].opt+"</span>";
          }
			optionHtml="<div class='answer'>"+optionSpan+"</div>";


	},

	drawAction:function(){

		actionHtml="<div class='action'><button id='showButton' onclick=callback('"+index+"',this)>显示答案与解析</button></div>";

	},

	darwRemarkHtml:function(){
		
		if(answer!=""&&expositiom!=""){
			remarkHtml="<div class='action123' id="+index+"><span><label class='labelClass'>【答案】:</label>"+answer+"</span><span><label class='labelClass'>【解析】:</label>"+expositiom+"</span></div>";
		}else if(answer!=""&&expositiom==""){
			remarkHtml="<div class='action123' id="+index+"><span><label class='labelClass'>【答案】:</label>"+answer+"</span></div>";
		}

		

	},
	gen:function(data,id){
		

		var abc="";

		drawChoice.init(data);

		drawChoice.darwContentHtml();

		drawChoice.darwDescriptionHtml();

		drawChoice.darwOptionHtml();

		drawChoice.drawAction();
		
		drawChoice.darwRemarkHtml();
		
		drawChoice.darwTitleHtml();

		html="<div class='block'>"+titleHtml+contentHtml+descriptionHtml+optionHtml+actionHtml+remarkHtml+"</div><br/>";

		$("#"+id).append(html);

		//console.log(html);
		//
		//
		//abc=html;
		
	//	return abc;
	
	}



 
}










