define([
	'angular',
	'uiRouter',
	'ngResource',
	'ngProgress',
	'./services/index',
	'./ctrls/index',
	'./directives/index'
], function(angular) {
	'use strict';

	console.log('Oyst');

	var deps = [
		'ui-router',
		'ngResource',
		'ngProgress',
		'app.ctrls',
		'app.services',
		'app.directives'
	];

	return angular.module('app', deps);
});