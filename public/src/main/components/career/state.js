app.config(function ($stateProvider) {
	var state = {
		name: 'careers',
		url: '/careers',
		templateUrl: '/src/main/components/careers/tpl.html',
		data: {
			title: 'Careers'
		}
	};

	$stateProvider.state(state);
});