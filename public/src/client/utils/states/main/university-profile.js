var app = require("../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var profile = {
			name: 'main.university-profile',
			abstract: true,
			url: '/university-profile',
			templateUrl: '/assets/app/views/_main/children/university-profile/_template.html',
			data: {
				title: 'University Profile'
			}
		};

		$stateProvider
			.state(profile);
	}
]);