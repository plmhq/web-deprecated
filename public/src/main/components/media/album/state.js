var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var album = {
			name: 'media.album',
			url: '/album',
			templateUrl: '/src/client/main/media/album/tpl.html',
			data: {
				title: 'Media: Albums',
				rawTitle: 'Albums'
			}
		};

		$stateProvider
			.state(album);
	}
]);