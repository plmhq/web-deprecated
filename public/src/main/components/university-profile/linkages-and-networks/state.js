app.config(function ($stateProvider) {
	var state = {
		name: 'university-profile.linkages-networks',
		url: '/linkages-networks',
		templateUrl: '/src/main/components/university-profile/linkages-networks/tpl.html',
		data: {
			title: 'University Profile: Linkages and Networks',
			rawTitle: 'Linkages and Networks'
		}
	};

	$stateProvider.state(state);
});