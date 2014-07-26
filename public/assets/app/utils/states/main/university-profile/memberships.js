var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.memberships',
			url: '/memberships',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/memberships/_template.html',
			data: {
				title: 'University Profile: Memberships'
			}
		};

		$stateProvider
			.state(state);
	}
]);