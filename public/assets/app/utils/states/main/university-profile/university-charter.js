var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.university-charter',
			url: '/university-charter',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/university-charter/_template.html',
			data: {
				title: 'University Profile: University Charter'
			}
		};

		$stateProvider
			.state(state);
	}
]);