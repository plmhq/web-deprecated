app.config(function ($stateProvider) {
	var state = {
		name: 'main.university-profile.hymn',
		url: '/hymn',
		templateUrl: '/src/client/components/main/university-profile/hymn/tpl.html',
		data: {
			title: 'University Profile: Hymn',
			rawTitle: 'Hymn'
		}
	};

	$stateProvider.state(state);
});