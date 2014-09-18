angular.module('app')
	.config(function($locationProvider) {
		// HTML5 mode
		$locationProvider.html5Mode(true);
		$locationProvider.hashPrefix('!');
	});