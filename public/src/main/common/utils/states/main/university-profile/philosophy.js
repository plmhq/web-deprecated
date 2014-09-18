var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'university-profile.philosophy',
			url: '/philosophy',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/philosophy/_template.html',
			data: {
				title: 'University Profile: Philosophy',
				rawTitle: 'Philosophy'
			}
		};

		$stateProvider
			.state(state);
	}
]);