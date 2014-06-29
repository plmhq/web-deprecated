var app = require("../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		
		// Dashboard Auth
		var auth = {
			name: 'db.auth',
			abstract: true,
			templateUrl: 'app/views/_db-auth/template.html',
			resolve: {
				auth: ['AuthService', function(AuthService) {
					return AuthService.check();
				}]
			}
		};

		// Dashboard Auth
		$stateProvider.state(auth);
		
	}
]);