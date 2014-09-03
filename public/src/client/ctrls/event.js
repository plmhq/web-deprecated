var app = require('../app');

app.controller('EventCtrl', [
	'$scope',
	'$filter',
	'EventSrvc',
	function($scope, $filter, EventSrvc) {
		//
		$scope.instance = EventSrvc.instance;

		//
		$scope.bundle = EventSrvc.bundle;
	}
]);