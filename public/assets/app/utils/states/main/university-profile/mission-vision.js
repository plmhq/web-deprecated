var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.mission-vision',
			url: '',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/mission-vision/_template.html',
			data: {
				title: 'University Profile: Mission and Vision'
			}
		};

		$stateProvider
			.state(state);
	}
]);