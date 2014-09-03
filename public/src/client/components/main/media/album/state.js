var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var album = {
			name: 'main.media.album',
			url: '/album',
			templateUrl: '/assets/app/views/_main/children/media/children/album/_template.html',
			data: {
				title: 'Media: Albums',
				rawTitle: 'Albums'
			}
		};

		$stateProvider
			.state(album);
	}
]);