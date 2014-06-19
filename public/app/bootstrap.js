requirejs.config({
	paths: {		
		jquery: "../assets/vendor/jquery/dist/jquery.min",
		bootstrap: "../assets/vendor/bootstrap/dist/js/bootstrap.min",
		angular: "../assets/vendor/angular/angular.min",
		ngResource: "../assets/vendor/angular-resource/angular-resource.min",
		uiRouter: "../assets/vendor/angular-ui-router/release/angular-ui-router.min",
		ngProgress: "../assets/vendor/ngprogress/build/ngProgress.min",
		ngTimer: "../assets/vendor/angular-timer/dist/angular-timer.min",
		ngSlick: "../assets/vendor/angular-slick/dist/slick.min",
		datejs: "../assets/vendor/datejs/build/date",
	},

	shim: {

		"jquery": {
			exports: "jquery"
		},

		"bootstrap": {
			deps: ["jquery"]
		},

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

		"ngTimer": {
			exports: "ngTimer",
			deps: ["angular"]
		},

		"ngSlick": {
			exports: "ngSlick",
			deps: ["angular"]
		},

		"datejs": {
			exports: "datejs"
		}
	}
});

require([
	'jquery',
	'angular',
	// './app',
	'./index'
], function($, angular) {
	'use strict';

	try {
		angular.element(document).ready(function() {
			angular.bootstrap(document, ['app']);
		});
	} catch(e) {
		console.error(e.stack || e.message || e);
	}
});