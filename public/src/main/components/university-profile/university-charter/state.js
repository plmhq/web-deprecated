app.config(function ($stateProvider) {
	var state = {
		name: 'university-profile.university-charter',
		url: '/university-charter',
		templateUrl: '/src/main/components/university-profile/university-charter/tpl.html',
		data: {
			title: 'University Profile: University Charter',
			rawTitle: 'University Charter'
		}
	};

	$stateProvider.state(state);
});