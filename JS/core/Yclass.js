function Yclass() {
	this.name = "Yclass";
}

Yclass.prototype = {
	constructor: Yclass,	
	toString : function () {
		return "(" + "this is Object of Class " + this.name + ")";
	}
}

//静态方法
Yclass.statics =  {
	extend : function(o,p) {
		for (prop in p) {
			o[prop] = p[prop];
		}
		return o;
	},
	defineClass : function(constructor,methods,statics) {
		if(methods) this.extend(constructor.prototype, methods);
		if(statics) this.extend(constructor, statics);
		return constructor;
	}
}

var YLB = {};
YLB.App = {};

//var yclass = new Yclass();


//生成一个新的Class
/*var NewClass = Yclass.statics.defineClass(function(){},
	{
		a: function() {console.log("methods a");}
	},
	{
		b: function() {console.log("statics function b");}
	}
);

var nclass = new NewClass();
nclass.a();
NewClass.b();*/






