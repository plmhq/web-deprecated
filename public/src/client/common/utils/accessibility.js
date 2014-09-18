app.run(function($rootScope, $state, $stateParams) {
	// Reference the $state and $stateParams to the
	// $rootScope for accessibility
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
});