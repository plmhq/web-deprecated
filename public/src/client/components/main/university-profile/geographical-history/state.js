app.config(function ($stateProvider) {
	var state = {
		name: 'main.university-profile.geographical-history',
		url: '/geographical-history',
		templateUrl: '/src/client/components/main/university-profile/geographical-history/tpl.html',
		data: {
			title: 'University Profile: Geographical History',
			rawTitle: 'Geographical History'
		}
	};

	$stateProvider.state(state);
});