app.config(function ($stateProvider) {
	var state = {
		name: 'university-profile.memberships',
		url: '/memberships',
		templateUrl: '/src/main/components/university-profile/memberships/tpl.html',
		data: {
			title: 'University Profile: Memberships',
			rawTitle: 'Memberships'
		}
	};
	$stateProvider.state(state);
});