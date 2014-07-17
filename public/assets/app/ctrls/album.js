var app = require('../app');

app.controller('AlbumCtrl', [
	'$scope',
	'AlbumSrvc',
	function($scope, AlbumSrvc) {
		$scope.instance = AlbumSrvc.instance;
		
		$scope.bundle = AlbumSrvc.bundle;

		// Home: the four thumbnails
		$scope.bundleSM = (function(bundle) {
			var newBundle = [];

			// Iterate each item and push to the list
			for(var _i = 1; _i < bundle.length; _i++) {
				newBundle[_i - 1] = bundle[_i];
			}

			console.log(bundle);

			return newBundle;
		})($scope.bundle);

		console.log($scope.bundleSM);
	}
]);