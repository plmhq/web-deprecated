var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'university-profile.memberships',
			url: '/memberships',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/memberships/_template.html',
			data: {
				title: 'University Profile: Memberships',
				rawTitle: 'Memberships'
			}
		};

		$stateProvider
			.state(state);
	}
]);