var app = require("../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var profile = {
			name: 'main.university-profile',
			url: '/university-profile',
			templateUrl: '/assets/app/views/_main/desc/university-profile/_template.html',
		};

		var media = {
			name: 'main.media',
			url: '/media',
			templateUrl: '/assets/app/views/_main/desc/media/_template.html',
		};

		var admission = {
			name: 'main.admission',
			url: '/admission',
			templateUrl: '/assets/app/views/_main/desc/admission/_template.html',
		};

		var career = {
			name: 'main.career',
			url: '/career',
			templateUrl: '/assets/app/views/_main/desc/career/_template.html',
		};

		$stateProvider
			.state(profile)
			.state(media)
			.state(admission)
			.state(career);
	}
]);