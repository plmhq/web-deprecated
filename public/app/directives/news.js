app = require("../app");

app.directive('news', [
	function() {
		var controller = [
			'$scope',
			'NewsService',
			function($scope, NewsService) {
				$scope.bundle = NewsService.bundle;

				$scope.getImageLink = function(image) {
					return NewsService.getImageLink(image);
				}

				$scope.formatDate = function(date) {
					return NewsService.formatDate('MMMM dd, yyyy', date);
				}
			}
		];

		return {
			restrict: 'EA',
			transclude: true,
			template: '<div ng-transclude></div>',
			controller: controller
		}
	}
]);