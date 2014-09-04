app.config(function ($stateProvider) {
	var state = {
		name: 'main.university-profile.university-charter',
		url: '/university-charter',
		templateUrl: '/src/client/components/main/university-profile/university-charter/tpl.html',
		data: {
			title: 'University Profile: University Charter',
			rawTitle: 'University Charter'
		}
	};

	$stateProvider.state(state);
});