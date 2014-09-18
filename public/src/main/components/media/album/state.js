app.config(function($stateProvider) {

	var album = {
		name: 'media.album',
		url: '/album',
		templateUrl: '/src/main/components/media/album/tpl.html',
		data: {
			title: 'Media: Albums',
			rawTitle: 'Albums'
		}
	};

	$stateProvider.state(album);
});