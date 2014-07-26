var app = require("../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var media = {
			name: 'main.media',
			url: '/media',
			templateUrl: '/assets/app/views/_main/children/media/_template.html',
			data: {
				title: 'Media'
			}
		};

		$stateProvider
			.state(media);
	}
]);