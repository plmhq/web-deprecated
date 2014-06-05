define(['../app'], function(app) {
	'use strict';

	return app.config([
		'$locationProvider',
		'$stateProvider'
		function($locationProvider, $stateProvider) {

			// HTML5 mode
			$locationProvider.html5Mode(true);

			// Default state
			var def = {
				name: 'def',
				abstract: true
			};

			var mod = {
				name: 'mod',
				abstract: true
			};

			// var 
			$stateProvider
				.state(def)
				.state(mod);

		}
	]);
});