app.config(function ($stateProvider) {
	var career = {
		name: 'career',
		url: '/career',
		templateUrl: '/src/main/components/career/tpl.html',
		data: {
			title: 'Careers'
		}
	};

	$stateProvider.state(career);
});