var app = require("../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		// Homepage
		var home = {
			name: 'main.home',
			url: '/',
			templateUrl: '/app/components/home/index.html',
			resolve: {
				news: ['NewsService', function(NewsService) {
					return NewsService.getBundle(5);
				}]
			}
		};

		// Default
		$stateProvider.state(home);
		
	}
]);