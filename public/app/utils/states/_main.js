var app = require("../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		// Default state
		var def = {
			name: 'main',
			abstract: true,
			templateUrl: '/app/view/main/template.html'
		};

		// Default
		$stateProvider
			.state(main);
	}
]);