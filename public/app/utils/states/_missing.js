var app = require("../../app");

app.config([
	'$urlRouterProvider',
	function($urlRouterProvider) {

		// Missing routes
		$urlRouterProvider.otherwise('/');
			
	}
]);