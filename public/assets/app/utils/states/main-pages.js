var app = require("../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var profile = {
			name: 'main.university-profile',
			url: '/university-profile',
			templateUrl: '/assets/app/views/_main/desc/university-profile/_template.html',
			data: {
				title: 'University Profile'
			}
		};

		var media = {
			name: 'main.media',
			url: '/media',
			templateUrl: '/assets/app/views/_main/desc/media/_template.html',
			data: {
				title: 'Media'
			}
		};

		var admission = {
			name: 'main.admission',
			url: '/admission',
			templateUrl: '/assets/app/views/_main/desc/admission/_template.html',
			data: {
				title: 'Admission'
			}
		};

		var career = {
			name: 'main.career',
			url: '/career',
			templateUrl: '/assets/app/views/_main/desc/career/_template.html',
			data: {
				title: 'Careers'
			}
		};

		$stateProvider
			.state(profile)
			.state(media)
			.state(admission)
			.state(career);
	}
]);