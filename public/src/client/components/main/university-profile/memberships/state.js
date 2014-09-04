app.config(function ($stateProvider) {
	var state = {
		name: 'main.university-profile.memberships',
		url: '/memberships',
		templateUrl: '/src/client/components/main/university-profile/memberships/tpl.html',
		data: {
			title: 'University Profile: Memberships',
			rawTitle: 'Memberships'
		}
	};
	$stateProvider.state(state);
});