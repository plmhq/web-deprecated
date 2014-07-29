window.jQuery 	= require("../vendor/jquery/dist/jquery");
global.jQuery 	= require("../vendor/jquery/dist/jquery");
window.$ 		= require("../vendor/jquery/dist/jquery");
global.$ 		= require("../vendor/jquery/dist/jquery");
$				= require("../vendor/jquery/dist/jquery");

var
	tbs	 			= require("../vendor/bootstrap/dist/js/bootstrap.min"),
	angular			= require("../vendor/angular/angular"),
	ngResource 		= require("../vendor/angular-resource/angular-resource"),
	uiRouter 		= require("../vendor/angular-ui-router/release/angular-ui-router"),
	ngProgress 		= require("../vendor/ngprogress/build/ngProgress"),
	ngProgressLite	= require("../vendor/ngprogress-lite/ngprogress-lite"),
	ngTimer 		= require("../vendor/angular-timer/dist/angular-timer"),
	jqSlick 		= require("../vendor/slick-carousel/slick/slick.min"),
	ngSlick 		= require("../vendor/angular-slick/dist/slick"),
	datejs 			= require("../vendor/datejs/build/date"),

	// App
	app 			= require("./app"),
	components 		= require("./components/_index"),
	start 			= require("./start")();