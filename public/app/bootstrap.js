require.config({
	paths: {
		angular: "/assets/vendor/angular/angular.min",
		ngResource: "/assets/vendor/angular-resource/angular-resource.min",
		uiRouter: "/assets/vendor/angular-ui-router/release/angular-ui-router.min",
		bootstrap: "/assets/vendor/bootstrap/js/bootstrap.min",
		jquery: "/assets/vendor/jquery/dist/jquery.min"
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
			exports: "ui-router",
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
	'angular',
	'jquery',
	'bootstrap',
	'./index'
], function(angular, $) {
	'use strict';

	angular.element(document).ready(function() {
		angular.bootstrap(document, ['app']);
	});
});