define([
	'angular',
	'uiRouter',
	'ngResource',
	'ngProgress',
	// './ctrls/index',
	// './services/index',
	'./directives/index'
], function(angular) {
	'use strict';

	var deps = [
		'ui.router',																																																																																																																																																																																																																																																																																									'ngResource',
		'ngProgress',
		'app.directives'
		// 'app.ctrls',
		// 'app.services',
	];

	return angular.module('app', deps);
});