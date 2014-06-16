define(['../../app'], function(app) {
	'use strict';

	app.config([
		'$stateProvider',
		function($stateProvider) {
			// Dashboard guest
			var db = {};
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