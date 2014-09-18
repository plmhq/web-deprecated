app.config(function ($stateProvider) {
	var state = {
		name: 'university-profile.hymn',
		url: '/hymn',
		templateUrl: '/src/main/components/university-profile/hymn/tpl.html',
		data: {
			title: 'University Profile: Hymn',
			rawTitle: 'Hymn'
		}
	};

	$stateProvider.state(state);
});