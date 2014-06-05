define([
	'angular',
	'ui-router',
	'ngResource',
	'./services/index',
	'./ctrl/index',
	'./directives/index'
], function() {
	'use strict';

	return angular.module('app', [
		'ui-router',
		'ngResource',
		'app.ctrl',
		'app.services',
		'app.directives'
	]);
});