var app = require("../app");

app.controller('SlideshowCtrl', [
	'$scope',
	'SlideshowSrvc',
	function($scope, SlideshowSrvc) {
		$scope.slides = SlideshowSrvc.bundle;

		$scope.getImageURL = function(filename) {
			return SlideshowSrvc.getImageURL(filename);
		}
		
		console.log($scope.slides);
	}
]);