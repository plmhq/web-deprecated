define(['../../app'], function(app) {
	'use strict';

	return app.config([
		'$urlRouterProvider',
		function($urlRouterProvider) {

			// Missing routes
			$urlRouterProvider.otherwise('/');

			
		}
	]);
});