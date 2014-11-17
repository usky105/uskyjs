var Page = Yclass.statics.defineClass(
	//constructor
	function(){this.name = "Page"},
	//methods
	{		
		toString : function () {
			return "(" + "this is Object of Class " + this.name + ")";
		}
	},
	//statics
	{
		addLoadEvent : function (func) {
			var oldonload=window.onload;
		    if(typeof window.onload !="function"){
		        window.onload=func;
		    }else{
		        window.onload=function(){
		            oldonload();
		            func();
		        }
		    }
		}
	}
);
