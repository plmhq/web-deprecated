var app = require("../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		// Homepage
		var home = {
			name: 'main.home',
			url: '/',
			templateUrl: '/assets/app/views/_main/desc/home/_template.html',
			resolve: {
				// Fetches 6 revent news
				news: ['NewsService', function(NewsService) {
					return NewsService.getRecent(6);
				}],

				// Fetches 2 recent events
				e: ['EventSrvc', function(EventSrvc) {
					return EventSrvc.getRecent(2);
				}],

				// Fetches 5 recent albums
				album: ['AlbumSrvc', function(AlbumSrvc) {
					return AlbumSrvc.getRecent();
				}]
			}
		};

		// Default
		$stateProvider.state(home);
		
	}
]);