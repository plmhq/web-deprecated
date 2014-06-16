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
				templateUrl: '/app/components/home/index.html',
				resolve: {
					news: ['NewsService', function(NewsService) {
						return NewsService.getBundle(5);
					}]
				}
			};

			console.log(home);
				
			// Dashboard state
			var mod = {
				name: 'mod',
				abstract: true,
				templateUrl: 'app/components/abstracts/db.html'
			};

			var dbauth = {
				name: 'dbauth',
				abstract: true,
				templateUrl: 'app/components/abstracts/dbauth.html',
				resolve: {
					auth: [function(AuthService) {
						return AuthService.guest();
					}]
				}
			}

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