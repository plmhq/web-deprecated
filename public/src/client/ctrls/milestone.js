var app = require('../app');

app.controller('MilestoneCtrl', [
	'$scope',
	'MilestoneSrvc',
	function($scope, MilestoneSrvc) {
		//
		$scope.eraCollection = MilestoneSrvc.eraCollection;

		//
		$scope.eraInstance = MilestoneSrvc.eraInstance;

		//
		$scope.isLastInTheCollection = function(index) {
			return MilestoneSrvc.isLastInTheCollection(index);
		}
	}
]);