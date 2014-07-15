var app = require("../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		
		// Dashboard guest
		var guest = {
			name: 'db.guest',
			url: '/login',
			templateUrl: '/assets/app/views/_db-guest/login.html',
			resolve: {
				guest: ['AuthService', function(AuthService) {
					return AuthService.guest();
				}]
			}	
		}

		// Dashboard Guest
		$stateProvider.state(guest);
		
	}
]);