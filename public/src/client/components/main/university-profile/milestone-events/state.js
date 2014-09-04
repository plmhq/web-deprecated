app.config(function ($stateProvider) {
	var state = {
		name: 'main.university-profile.milestone-events',
		url: '/milestone-events',
		templateUrl: '/src/client/components/main/university-profile/milestone-events/tpl.html',
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

	$stateProvider.state(state);
});