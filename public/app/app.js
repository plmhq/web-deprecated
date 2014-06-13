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

	console.log(new Date());

	var deps = [
		'ui.router',																																																																																																																																																																																																																																																																																									'ngResource',
		'ngProgress',
		// 'app.ctrls',
		// 'app.services',
		'app.directives'
	];

	console.log('OY');

	return angular.module('app', deps);
});