function MilestoneCtrl($scope, MilestoneSrvc) {
	//
	$scope.eraCollection = MilestoneSrvc.eraCollection;

	//
	$scope.eraInstance = MilestoneSrvc.eraInstance;
	
	//
	$scope.isLastInTheCollection = function(index) {
		return MilestoneSrvc.isLastInTheCollection(index);
	}
}

app.controller('MilestoneCtrl', MilestoneCtrl);