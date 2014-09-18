app.config(function ($stateProvider) {
	var state = {
		name: 'university-profile.geographical-history',
		url: '/geographical-history',
		templateUrl: '/src/main/components/university-profile/geographical-history/tpl.html',
		data: {
			title: 'University Profile: Geographical History',
			rawTitle: 'Geographical History'
		}
	};

	$stateProvider.state(state);
});