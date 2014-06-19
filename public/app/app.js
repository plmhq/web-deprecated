define([
	'angular',
	'uiRouter',
	'ngResource',
	'ngProgress',
	'ngTimer',
	'ngSlick',
	'./ctrls/index',
	'./services/index',
	'./directives/index'
], function(angular) {
	'use strict';

	var deps = [
		'ui.router',																																																																																																																																																																																																																																																																																									'ngResource',
		'ngProgress',
		'timer',
		'slick',
		'app.directives',
		'app.ctrls',
		'app.services'
	];

	return angular.module('app', deps);
});