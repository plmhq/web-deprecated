var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.hymn',
			url: '/hymn',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/hymn/_template.html',
			data: {
				title: 'University Profile: Hymn',
				rawTitle: 'Hymn'
			}
		};

		$stateProvider
			.state(state);
	}
]);