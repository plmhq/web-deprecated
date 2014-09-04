app.config(function ($stateProvider) {
	// Default state
	var main = {
		name: 'main',
		abstract: true,
		templateUrl: '/src/client/components/main/tpl.html'
	};
	
	// Default
	$stateProvider.state(main);
});