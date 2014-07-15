window.jQuery = require("../vendor/jquery/dist/jquery");
global.jQeury = require("../vendor/jquery/dist/jquery");

var
	tbs	 			= require("../vendor/bootstrap/dist/js/bootstrap.min"),
	angular			= require("../vendor/angular/angular"),
	ngResource 		= require("../vendor/angular-resource/angular-resource"),
	uiRouter 		= require("../vendor/angular-ui-router/release/angular-ui-router"),
	ngProgress 		= require("../vendor/ngprogress/build/ngProgress"),
	ngTimer 		= require("../vendor/angular-timer/dist/angular-timer"),
	ngSlick 		= require("../vendor/angular-slick/dist/slick"),
	datejs 			= require("../vendor/datejs/build/date"),

	// App
	start 			= require("./start"),
	app 			= require("./app"),
	components 		= require("./components/_index");

start();