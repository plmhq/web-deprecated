define(['../../app'], function(app) {
	'use strict';

	return app.config([
		'$stateProvider',
		function($stateProvider) {
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
		}
	]);
});