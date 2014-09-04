function EventCtrl($scope, $filter, EventSrvc) {
	//
	$scope.instance = EventSrvc.instance;
	
	//
	$scope.bundle = EventSrvc.bundle;
}

app.controller('EventCtrl', EventCtrl);