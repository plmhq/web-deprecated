app.config(function ($stateProvider) {
	var state = {
		name: 'main.university-profile.seal-and-colors',
		url: '/seal-and-colors',
		templateUrl: '/src/client/components/main/university-profile/seal-and-colors/tpl.html',
		data: {
			title: 'University Profile: Sean and Colors',
			rawTitle: 'Seal and Colors'
		}
	};

	$stateProvider.state(state);
});