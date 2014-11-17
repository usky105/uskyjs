YLB.Api = Yclass.statics.defineClass(
	//constructor
	function(){
		this.name = "YLB.Api"
	},
	//methods
	{	
		toString : function () {
			return "(" + "this is Object of Class " + this.name + ")";
		},
		get: function(uri, params, callback) {
			return this.call({
				url:uri,
				data:params,
				type:"GET",
				dataType:"json",
				success: callback
			});
		},
		post: function(uri, params, callback) {
			return this.call({
				url:uri,
				data:params,
				type:"POST",
				dataType:"json",
				success: callback
			});
		},
		call: (function() {		
			var invoke = function(options) {
				var _this = this;				
				jQuery.ajax(options);
			};
			return invoke;
		})(),
	},
	//statics
	{		
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
