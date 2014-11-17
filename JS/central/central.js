function include(filename) {
	var res_url = 'JS/';
	document.write("<scr" + "ipt language=\"JavaScript\" " +
		"type=\"text/javascript\" src=\"" + res_url +
		 filename + "\"><\/script>");
}
//Load jquery
include("lib/jquery-1.7.2.js");

//Load define Class (Util)
include("core/Yclass.js");

//Classes
include("app/Api.js");
include("app/App1.js");

//add Events onLOAD
include("Page.js");

//chaque page 
include("myjs1.js");
include("myjs2.js");
