app.config(function ($stateProvider) {
	var state = {
		name: 'main.university-profile.history',
		url: '/history',
		templateUrl: '/src/client/components/main/university-profile/history/tpl.html',
		data: {
			title: 'University Profile: History',
			rawTitle: 'History'
		}
	};

	$stateProvider.state(state);
});