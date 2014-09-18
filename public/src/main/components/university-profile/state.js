app.config(function ($stateProvider) {
	var profile = {
		parent: 'main',
		name: 'university-profile',
		abstract: true,
		url: '/university-profile',
		templateUrl: '/src/main/components/university-profile/tpl.html',
		data: {
			title: 'University Profile'
		}
	};

	$stateProvider.state(profile);
});