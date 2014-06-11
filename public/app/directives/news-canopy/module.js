define(['../module'], function(app) {
	'use strict';

	app.directive('newsCanopy', function() {
		var controller = ['$scope', 'NewsService', function($scope, NewsService) {
				$scope.news = NewsService.list;
		}];

		var object = {
			restrict: 'E',
			templateUrl: '',
			controller: controller,
			transclude: true
		};

		return object;
	});
});