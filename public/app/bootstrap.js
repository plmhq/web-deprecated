global.jQuery = require("../assets/vendor/jquery/dist/jquery");

var
	tbs	 			= require("../assets/vendor/bootstrap/dist/js/bootstrap.min"),
	angular			= require("../assets/vendor/angular/angular"),
	ngResource 		= require("../assets/vendor/angular-resource/angular-resource"),
	uiRouter 		= require("../assets/vendor/angular-ui-router/release/angular-ui-router"),
	ngProgress 		= require("../assets/vendor/ngprogress/build/ngProgress"),
	ngTimer 		= require("../assets/vendor/angular-timer/dist/angular-timer"),
	ngSlick 		= require("../assets/vendor/angular-slick/dist/slick"),
	datejs 			= require("../assets/vendor/datejs/build/date"),

	// App
	start 			= require("./start"),
	app 			= require("./app"),
	components 		= require("./components/_index");

start();