var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var e = {
			name: 'main.media.event',
			url: '/event',
			templateUrl: '/src/client/main/media/event/tpl.html',
			data: {
				title: 'Media: Events',
				rawTitle: 'Events'
			}
		};

		$stateProvider
			.state(e);
	}
]);