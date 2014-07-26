var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.seal-and-colors',
			url: '/seal-and-colors',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/seal-and-colors/_template.html',
			data: {
				title: 'University Profile: Sean and Colors'
			}
		};

		$stateProvider
			.state(state);
	}
]);