var app = require("../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var admission = {
			name: 'admission',
			url: '/admission',
			templateUrl: '/assets/app/views/_main/children/admission/_template.html',
			data: {
				title: 'Admission'
			}
		};

		$stateProvider.state(admission);
	}
]);