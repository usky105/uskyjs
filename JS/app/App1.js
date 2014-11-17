YLB.App.Test1 = Yclass.statics.defineClass(
	//constructor
	function(){
		this.name = "YLB.App.Test1"
	},
	//methods
	{		
		added: function (a,b) { 
			return a+b;
		},
		toString : function () {
			return "(" + "this is Object of Class " + this.name + ")";
		},
		show_obj_id: function(event) {
			event.preventDefault();
			var param = event.data.s ? event.data.s : "id";
			var id = $(event.currentTarget).attr(param);
			//console.log($(event.currentTarget).attr(param));

			var successHandler = function(result) {
				console.log(result);
			}

			YLB.Api.instance().get("apiTest.php",{p1:id}, successHandler);
		}
	},
	//statics
	{
		sfunc1: function() { alert("this is function static : sfunc1"); },
		
		instance: (function() {
			var _inst = null;
			return function(options) {
				if (!_inst) {
					
					_inst = new this(options);
				}
				return _inst;
			};
		})()
	}
);

/*var app2 = new YLB.App.Test1();*/

var app1 = YLB.App.Test1.instance();

