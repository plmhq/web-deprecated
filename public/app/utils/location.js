define(['../app'], function(app) {
	'use strict';

	return app.config([
		'$locationProvider',
		function($locationProvider) {
			// HTML5 mode
			$locationProvider.html5Mode(true);
		}
	]);
});