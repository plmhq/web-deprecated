var app = require("../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		// Default state
		var main = {
			name: 'main',
			abstract: true,
			templateUrl: '/app/views/_main/_template.html'
		};

		// Default
		$stateProvider
			.state(main);
	}
]);