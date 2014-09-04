app.config(function ($stateProvider) {
	var state = {
		name: 'main.university-profile.philosophy',
		url: '/philosophy',
		templateUrl: '/src/client/components/main/university-profile/philosophy/tpl.html',
		data: {
			title: 'University Profile: Philosophy',
			rawTitle: 'Philosophy'
		}
	};

	$stateProvider.state(state);
});