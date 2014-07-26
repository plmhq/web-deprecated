var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.geographical-history',
			url: '/geographical-history',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/geographical-history/_template.html',
			data: {
				title: 'University Profile: Geographical History'
			}
		};

		$stateProvider
			.state(state);
	}
]);