define(['../module'], function(app) {
	'use strict';

	app.directive('newsCanopy', function() {
		var controller = ['$scope', 'NewsService', function($scope, NewsService) {
				$scope.news = NewsService.list;
		}];

		var object = {
			restrict: 'E',
			templateUrl: 'app/directives/news-canopy/partial.html',
			controller: controller,
			transclude: true
		};

		return object;
	});
});