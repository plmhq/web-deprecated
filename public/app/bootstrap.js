requirejs.config({
	paths: {
		angular: "../assets/vendor/angular/angular.min",

		ngResource: "../assets/vendor/angular-resource/angular-resource.min",

		uiRouter: "../assets/vendor/angular-ui-router/release/angular-ui-router.min",

		ngProgress: "../assets/vendor/ngprogress/build/ngProgress.min",

		bootstrap: "../assets/vendor/bootstrap/dist/js/bootstrap.min",
		
		jquery: "../assets/vendor/jquery/dist/jquery.min"
	},

	shim: {
		"angular": {
			exports: "angular"
		},

		"ngResource": {
			exports: "ngResource",
			deps: ["angular"]
		},

		"uiRouter": {
			exports: "uiRouter",
			deps: ["angular"]
		},

		"ngProgress": {
			exports: "ngProgress",
			deps: ["angular"]
		},

		"bootstrap": {
			deps: ["jquery"]
		},

		"jquery": {
			exports: "jquery"
		}
	}
});

require([
	'jquery',
	'angular',
	'./index'
], function($, angular, app) {
	'use strict';

	console.log(app);
	console.log('Oyes');

	try {
		angular.element(document).ready(function() {
			angular.bootstrap(document, ['app']);
		});
	} catch(e) {
		console.error(e.stack || e.message || e);
	}
});