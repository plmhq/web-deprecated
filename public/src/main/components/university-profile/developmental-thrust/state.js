app.config(function ($stateProvider) {
	var state = {
		name: 'university-profile.developmental-thrust',
		url: '/developmental-thrust',
		templateUrl: '/src/main/components/university-profile/developmental-thrust/tpl.html',
		data: {
			title: 'University Profile: Developmental Thrust',
			rawTitle: 'Developmental Thrust'
		}
	};

	$stateProvider.state(state);
});