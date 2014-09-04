app.config(function ($stateProvider) {
	var state = {
		name: 'main.university-profile.developmental-thrust',
		url: '/developmental-thrust',
		templateUrl: '/src/client/components/main/university-profile/developmental-thrust/tpl.html',
		data: {
			title: 'University Profile: Developmental Thrust',
			rawTitle: 'Developmental Thrust'
		}
	};

	$stateProvider.state(state);
});