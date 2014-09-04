function SlideshowCtrl ($scope, SlideshowSrvc) {
	$scope.slides = SlideshowSrvc.bundle;
	
	$scope.getImageURL = function(filename) {
		return SlideshowSrvc.getImageURL(filename);
	}
}

app.controller('SlideshowCtrl',	SlideshowCtrl);