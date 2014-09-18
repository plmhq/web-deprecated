var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var e = {
			name: 'media.event',
			url: '/event',
			templateUrl: '/assets/app/views/_main/children/media/children/event/_template.html',
			data: {
				title: 'Media: Events',
				rawTitle: 'Events'
			}
		};

		$stateProvider
			.state(e);
	}
]);