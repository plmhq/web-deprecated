var app = require("../app");

app.config([
	'$locationProvider',
	function($locationProvider) {
		// HTML5 mode
		$locationProvider.html5Mode(true);
	}
]);