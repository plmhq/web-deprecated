app = require("../app");

app.directive('NewsCtrl', [
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
]);