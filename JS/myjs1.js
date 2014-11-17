Page.addLoadEvent(function() {  
	//transfer params for methods of Object  
    var params = {s:"id"}; 
    $(".free").click(params,app1.show_obj_id);

    //TEST for js
    //元素位置信息篇****
    /*
    	获取窗口滚动条的坐标    
     */
    function getScrollOffsets(w) {
    	// 使用指定的窗口，如果不带参数则使用当前窗口
    	w = w || window;
    	
    	//除了IE 8 及更早的版本以外，其他浏览器都能用
    	if(w.pageXOffset != null) return {x:w.pageXOffset, y:w.pageYOffset};

    	//对标准模式下的IE（或任意浏览器）
    	var d = w.document;
    	if (document.compatMode == "CSS!compat")
    		return {x:d.documentElement.scrollLeft, y:d.documentElement.scrollTop};
    	
    	//对怪异模式下的浏览器
    	return {x:d.body.scrollLeft, y:d.body.scrollTop};

    } 
    console.log("窗口滚动条的坐标 ：");
    console.log(getScrollOffsets());

    /*
    	获取窗口的视口尺寸
     */
    function getViewportSize(w) {
    	//使用指定的窗口，如果不带参数则使用当前窗口
    	w = w || window;

    	//除了IE 8 及更早的版本以外，其他浏览器都能用
    	if(w.innerWidth != null) return {x:w.innerWidth, y:w.innerHeight};

    	//对标准模式下的IE（或任意浏览器）
    	var d = w.document;
    	if (document.compatMode == "CSS!compat")
    		return {x:d.documentElement.clientWidth, y:d.documentElement.clientHeight};
    	
    	//对怪异模式下的浏览器
    	return {x:d.body.clientWidth, y:d.body.clientHeight};
    }
    console.log("窗口的视口尺寸 ：");
    console.log(getViewportSize());
    
    /*
    	获得滚动条可以滚动的Y量
     */
    function getScrollYToBottom() {
    	var documentHeight = document.documentElement.offsetHeight; //获得文档的高度
    	var viewportHeight = window.innerHeight;					//获得视图的高度
    	return documentHeight - viewportHeight;
    }

    /*
    	滚动到页面底部
     */
    function gotoBottom() {    	
    	window.scrollTo(0, getScrollYToBottom());
    }
    //gotoBottom();
    
    /*
    	自动滚动到底部
     */
    function gotoBottomAuto(y,miseconde) {
    	var ScrollYToBottom = getScrollYToBottom();
    	var m = setInterval(function() {
    		scrollBy(0,y);
    		var scroll_offsets = getScrollOffsets();
    		z = scroll_offsets.y;  		

    		if(z == ScrollYToBottom) {
    			console.log(z + "--" + ScrollYToBottom + " : setInterval end !");
    			clearInterval(m);
    		}    	
    	}, miseconde);
    }
   	//gotoBottomAuto(3,100);
    
   	/*
   	  underline the content of the document's fifth paragraph and scroll it into view at the top of the window.
   	  使(elements队列里某一元素/某元素)始终滚动到可见的位置
   	 */
   	function setElementVisible(elements, index, isTop ) {
   		isTop = typeof isTop == 'undefined' ? true : isTop;
   		index = typeof index == 'undefined' ? 0 : index;

   		var length_elts = elements.length;
   		console.log(length_elts);
   		if(length_elts > 1) {
   			if(index < length_elts && index >= 0) {
	   			elements[index].scrollIntoView(isTop);
	   		}
   		} else {
   			elements.scrollIntoView(isTop);
   		}   		
   	}
   	//an example for one element .
   	//var one_element = $(".free")[1];
   	//setElementVisible(one_element);

   	//an example for many elements .
   	//var les_elements = $(".free");
   	//setElementVisible(les_elements, 2);
   
   	/*
    	getBoundingClientRect() 获取元素位置信息
     */
   	//var element = $(".free")[2];
   	//console.log(element.getBoundingClientRect());

   	/*
   		当未可见的元素在滚动中被显示出来时，触发动作
   		EXP：图片的逐步加载
   	 */
   	/*$(document).bind("scroll.lazy_load", function(event) {
	   	var scroll_offsets = getScrollOffsets();
	   	z = scroll_offsets.y; 
	    var viewportHeight = window.innerHeight;
	    var element = $(".free")[5];
	   	elementTop = element.offsetTop;
	   	if(elementTop < z + viewportHeight + 100 && elementTop > viewportHeight) {
	   		console.log("终于滚动到我了");
	   	}
	   	console.log(elementTop);
   	});*/

	/*
		！--前提：对于那些包含滚动条且有溢出内容的元素，此方法无效。--！
		计算指定元素的文档坐标
	 */
	function getElementPosition(e) {
		var x = 0, y = 0;
		while(e != null) {
			x += e.offsetLeft;
			y += e.offsetTop;
			e = e.offsetParent;
		}
		return {x:x, y:y};
	}
	//var element = $(".free")[2];
  //console.log(getElementPosition(element));

  /*
    查询选取的文本
   */
  function getSelectedText() {
    if(window.getSelection) { //HTML5标准API
      return window.getSelection().toString();
    } else if (document.selection) { //IE特有的技术
      return document.selection.createRange().text;
    }
  }
  //点击左上角的铲子图标
  $(".top .icon a").click(function(event) {
    event.preventDefault();
    console.log(getSelectedText());
  });

  /*
  从文本输入域或者<textarea>元素中获取选取的文本可使用以下代码：
    elt.value.substring(elt.selectionStart, elt.selectionEnd);
   */
  
  /*
  事件取消
   */
  function cancelHandel(event) {
    var event = event || window.event;

    /*这里是处理事件的代码*/

    //现在取消事件相关的默认行为
    if(event.preventDefault) event.preventDefault(); //标准技术
    if(event.returnValue) event.returnValue = false; //IE
    return false; //用于处理使用对象属性注册的处理程序
  }

  
  

  


});

