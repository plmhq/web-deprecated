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
			var db = {};
			
			// Main dashboard state
			db.main = {
				name: 'db',
				abstract: true,
				url: '/dashboard'
			};

			// Dashboard Auth
			db.auth = {};
			db.auth.main = {
				name: 'db.auth',
				abstract: true,
				templateUrl: 'app/components/abstracts/dbauth.html',
				resolve: {
					auth: ['AuthService', function(AuthService) {
						return AuthService.check();
					}]
				}
			};

			// Dashboard Auth
			$stateProvider
				.state(db.main)
				.state(db.auth.main);

			// Dashboard guest
			db.guest = {};
			db.guest.main = {
				name: 'db.guest',
				templateUrl: 'app/components/abstracts/db-guest.html',
				resolve: {
					guest: ['AuthService', function(AuthService) {
						return AuthService.guest();
					}]
				}	
			}
			db.guest.login = {
				name: 'db.guest.login',
				templateUrl: 'app/components/db/login.html',
				url: '/login'
			};

			// Dashboard Guest
			$stateProvider
				.state(db.guest.main)
				.state(db.guest.login);
		}
	]);
});