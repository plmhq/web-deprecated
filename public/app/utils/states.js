define(['../app'], function(app) {
	'use strict';

	return app.config([
		'$stateProvider',
		'$urlRouteProvider',
		function($stateProvider, $urlRouteProvider) {

			// Missing routes
			$urlRouteProvider.otherwise('/');

			// Default state
			var def = {
				name: 'def',
				abstract: true,
				templateUrl: 'app/components/abstract/def.html'
			};

			var home = {
				name: 'def.home',
				url: '/',
				templateUrl: '/app/components/def/index.html'
			};

			// Dashboard state
			var mod = {
				name: 'mod',
				abstract: true,
				templateUrl: 'app/components/abstract/mod.html'
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