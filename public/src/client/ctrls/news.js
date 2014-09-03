app = require("../app");

app.controller('NewsCtrl', [
	'$scope',
	'NewsSrvc',
	function($scope, NewsSrvc) {
		$scope.bundle = NewsSrvc.bundle;

		$scope.getImageLink = function(image) {
			return NewsSrvc.getImageLink(image);
		}

		$scope.formatDate = function(date) {
			return NewsSrvc.formatDate('MMMM dd, yyyy', date);
		}

		$scope.getCurrentPage = function() {
			return NewsSrvc.getCurrentPage();
		}

		$scope.getNextPage = function(currentPage) {
			return NewsSrvc.getNextPage(currentPage);
		}

		$scope.getPreviousPage = function(currentPage) {
			return NewsSrvc.getPreviousPage(currentPage);
		}

		$scope.isFirstPage = function() {
			return NewsSrvc.isFirstPage();
		}

		$scope.isLastPage = function() {
			return NewsSrvc.isLastPage();
		}
	}
]);