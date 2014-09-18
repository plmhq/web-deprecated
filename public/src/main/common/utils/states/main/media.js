var app = require("../../../app");

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		var media = {
			name: 'media',
			abstract: true,
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