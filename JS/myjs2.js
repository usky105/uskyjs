Page.addLoadEvent(function() {
    //this is a template for js of page 
    /*
   		显示title
   	 */
   	console.log(document.title);
   	console.log(document.URL);
   	console.log(document.location.toString());
   	console.log(document.lastModified);
   	console.log(document.referrer);

   	/*window.onbeforeunload = function() {
   		alert("111");
   	}
   	window.onunload = function() {
   		alert("111");
   	}*/
   	//visibility display
   	
   	$("#inputtext").keypress(function(event) {
   		console.log("11");
   		console.log(event);
   	});

   	/*$("#inputtext").textinput(function(event) {
   		console.log(event);
   	});*/

});
