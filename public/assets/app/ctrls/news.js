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
	}
]);