app.config(function ($stateProvider) {
	var state = {
		name: 'university-profile.philosophy',
		url: '/philosophy',
		templateUrl: '/src/main/components/university-profile/philosophy/tpl.html',
		data: {
			title: 'University Profile: Philosophy',
			rawTitle: 'Philosophy'
		}
	};

	$stateProvider.state(state);
});