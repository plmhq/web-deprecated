define([
	'angular',
	'uiRouter',
	'ngResource',
	'./services/index',
	'./ctrls/index',
	'./directives/index'
], function(angular) {
	'use strict';

	return angular.module('app', [
		'ui-router',
		'ngResource',
		'app.ctrl',
		'app.services',
		'app.directives'
	]);
});