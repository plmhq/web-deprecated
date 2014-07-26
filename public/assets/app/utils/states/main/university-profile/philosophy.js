var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.philosophy',
			url: '/philosophy',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/philosophy/_template.html',
			data: {
				title: 'University Profile: Philosophy'
			}
		};

		$stateProvider
			.state(state);
	}
]);