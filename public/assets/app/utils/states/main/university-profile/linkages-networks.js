var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.linkages-networks',
			url: '/linkages-networks',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/linkages-networks/_template.html',
			data: {
				title: 'University Profile: Linkages and Networks',
				rawTitle: 'Linkages and Networks'
			}
		};

		$stateProvider
			.state(state);
	}
]);