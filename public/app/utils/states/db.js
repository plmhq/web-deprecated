define(['../../app'], function(app) {
	'use strict';

	app.config([
		'$stateProvider',
		function($stateProvider) {
			// Dashboard state
			var db = {};
			db.main = {
				name: 'db',
				abstract: true,
				url: '/dashboard'
			};
			
			$stateProvider
				.state(db.main);
		}
	]);
});