app.config(function ($stateProvider) {
	// Default state
	var main = {
		name: 'main',
		abstract: true,
		templateUrl: '/assets/app/views/_main/_template.html'
	};
	
	// Default
	$stateProvider.state(main);
});