var app = require("../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		// Dashboard
		var db = {
			name: 'db',
			abstract: true,
			url: '/dashboard'
		};
			
		$stateProvider.state(db);
		
	}
]);