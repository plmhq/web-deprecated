define(['../module'], function(app) {
	'use strict';

	return app.controller('NewsCanopyCtrl', [
		'$scope',
		'NewsService',
		function($scope, NewsService) {
			$scope.bundle = NewsService.bundle;

			$scope.getImageLink = function(image) {
				return NewsService.getImageLink(image);
			}
		}
	]);
});