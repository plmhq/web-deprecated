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

			// Homepage
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

			// Default
			$stateProvider
				.state(def)
				.state(home);
				
			// Dashboard state
			var db = {
				name: 'db',
				abstract: true,
				templateUrl: 'app/components/abstracts/db.html'
				resolve: {
					guest: ['AuthService', function(AuthService) {
						return AuthService.guest();
					}]
				}				
			};

			var dbauth = {
				name: 'dbauth',
				abstract: true,
				templateUrl: 'app/components/abstracts/dbauth.html',
				resolve: {
					auth: ['AuthService', function(AuthService) {
						return AuthService.check();
					}]
				}
			};

			var login = {
				name: 'db.login',
				templateUrl: 'app/components/db/login.html'
			};

			var dbin = {
				home: {
					name: 'dbauth.home'
				}
			};
			
			// Dashboard
			$stateProvider
				.state(db)
				.state(dbauth)
				.state(login);
		}
	]);
});