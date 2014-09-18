var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'university-profile.seal-and-colors',
			url: '/seal-and-colors',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/seal-and-colors/_template.html',
			data: {
				title: 'University Profile: Sean and Colors',
				rawTitle: 'Seal and Colors'
			}
		};

		$stateProvider
			.state(state);
	}
]);