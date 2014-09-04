app.config(function ($stateProvider) {
	var profile = {
		name: 'main.university-profile',
		abstract: true,
		url: '/university-profile',
		templateUrl: '/src/client/main/university-profile/tpl.html',
		data: {
			title: 'University Profile'
		}
	};

	$stateProvider.state(profile);
});