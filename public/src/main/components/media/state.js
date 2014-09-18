app.config(function ($stateProvider, $urlRouterProvider) {
	var media = {
		parent: 'main',
		name: 'media',
		abstract: true,
		url: '/media',
		templateUrl: '/src/main/components/media/tpl.html'
	};
	
	$stateProvider.state(media);
});