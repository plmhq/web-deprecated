var app = require("../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var career = {
			name: 'main.career',
			url: '/career',
			templateUrl: '/assets/app/views/_main/children/career/_template.html',
			data: {
				title: 'Careers'
			}
		};

		$stateProvider
			.state(career);
	}
]);