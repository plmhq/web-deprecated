app.config(function ($stateProvider) {
	var state = {
		name: 'university-profile.seal-and-colors',
		url: '/seal-and-colors',
		templateUrl: '/src/main/components/university-profile/seal-and-colors/tpl.html',
		data: {
			title: 'University Profile: Sean and Colors',
			rawTitle: 'Seal and Colors'
		}
	};

	$stateProvider.state(state);
});