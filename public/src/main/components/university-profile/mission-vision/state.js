app.config(function ($stateProvider) {
	var state = {
		name: 'university-profile.mission-vision',
		url: '',
		templateUrl: '/src/main/components/university-profile/mission-vision/tpl.html',
		data: {
			title: 'University Profile: Mission and Vision',
			rawTitle: 'Mission and Vision'
		}
	};
	$stateProvider
		.state(state);
});