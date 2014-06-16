define(['../app'], function(app) {
	'use strict';

	return app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {

			// Missing routes
			$urlRouterProvider.otherwise('/');

			
		}
	]);
});