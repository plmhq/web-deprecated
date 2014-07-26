var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.developmental-thrust',
			url: '/developmental-thrust',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/developmental-thrust/_template.html',
			data: {
				title: 'University Profile: Developmental Thrust'
			}
		};

		$stateProvider
			.state(state);
	}
]);