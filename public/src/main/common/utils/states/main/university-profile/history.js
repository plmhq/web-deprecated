var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'university-profile.history',
			url: '/history',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/history/_template.html',
			data: {
				title: 'University Profile: History',
				rawTitle: 'History'
			}
		};

		$stateProvider
			.state(state);
	}
]);