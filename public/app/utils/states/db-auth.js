define(['../../app'], function(app) {
	'use strict';

	app.config([
		'$stateProvider',
		function($stateProvider) {
			// Dashboard Auth
			var db = {};
			db.auth = {};
			db.auth.main = {
				name: 'db.auth',
				abstract: true,
				templateUrl: 'app/components/abstracts/db-auth.html',
				resolve: {
					auth: ['AuthService', function(AuthService) {
						return AuthService.check();
					}]
				}
			};

			// Dashboard Auth
			$stateProvider
				.state(db.auth.main);
		}
	]);
});