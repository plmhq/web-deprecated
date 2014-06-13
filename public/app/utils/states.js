define(['../app'], function(app) {
	'use strict';

	return app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {

			// Missing routes
			$urlRouterProvider.otherwise('/');

			// Default state
			var def = {
				name: 'def',
				abstract: true,
				templateUrl: '/app/components/abstracts/def.html'
			};

			var home = {
				name: 'def.home',
				url: '/',
				templateUrl: '/app/components/home/index.html'
			};

			console.log(home);
				
			// Dashboard state
			var mod = {
				name: 'mod',
				abstract: true,
				templateUrl: 'app/components/abstracts/db.html'
			};

			// Default
			$stateProvider
				.state(def)
				.state(home);
			
			// Dashboard
			$stateProvider
				.state(mod);

		}
	]);
});