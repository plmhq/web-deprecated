var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.milestone-events',
			url: '/milestone-events',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/milestone-events/_template.html',
			data: {
				title: 'University Profile: Milestone Events',
				rawTitle: 'Milestone Events'
			},
			resolve: {
				milestones: ['MilestoneSrvc', function(MilestoneSrvc) {
					return MilestoneSrvc.getEraCollection();
				}]
			}
		};

		$stateProvider
			.state(state);
	}
]);