app.config(function ($stateProvider, $urlRouterProvider) {
	var media = {
		name: 'media',
		abstract: true,
		url: '/media',
		templateUrl: '/src/main/components/media/tpl.html',
		data: {
			title: 'Media'
		}
	};
	
	$stateProvider.state(media);
});