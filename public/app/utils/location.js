var app = require("../app");

	return app.config([
		'$locationProvider',
		function($locationProvider) {
			// HTML5 mode
			$locationProvider.html5Mode(true);
		}
	]);
});