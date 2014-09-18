app.config(function ($stateProvider) {
	var career = {
		name: 'career',
		url: '/career',
		templateUrl: '/src/client/main/career/tpl.html',
		data: {
			title: 'Careers'
		}
	};

	$stateProvider.state(career);
});