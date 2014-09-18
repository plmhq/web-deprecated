app.config(function ($stateProvider) {
	var state = {
		name: 'university-profile.history',
		url: '/history',
		templateUrl: '/src/main/components/university-profile/history/tpl.html',
		data: {
			title: 'University Profile: History',
			rawTitle: 'History'
		}
	};

	$stateProvider.state(state);
});