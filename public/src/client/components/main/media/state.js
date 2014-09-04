app.config(function ($stateProvider, $urlRouterProvider) {
	var media = {
		name: 'main.media',
		abstract: true,
		url: '/media',
		templateUrl: '/src/client/main/media/tpl.html',
		data: {
			title: 'Media'
		}
	};
	
	$stateProvider.state(media);
});