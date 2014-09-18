app.config(function($stateProvider) {

	var state = {
		name: 'media.event',
		url: '/event',
		templateUrl: '/src/main/components/media/event/tpl.html',
		data: {
			title: 'Media: Events',
			rawTitle: 'Events'
		}
	};

	$stateProvider.state(state);
});