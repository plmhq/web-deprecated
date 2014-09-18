app.config(function ($stateProvider) {
	// Default state
	var main = {
		name: 'main',
		abstract: true,
		templateUrl: '/src/main/components/tpl.html'
	};
	
	// Default
	$stateProvider.state(main);
});