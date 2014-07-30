var app = require("../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		// Homepage
		var home = {
			name: 'main.home',
			url: '/',
			templateUrl: '/assets/app/views/_main/children/home/_template.html',
			data: {
				title: 'Home'
			},
			resolve: {
				// Fetches 6 revent news
				news: ['NewsSrvc', function(NewsSrvc) {
					return NewsSrvc.getRecent(6);
				}],

				// Fetches 2 recent events
				e: ['EventSrvc', function(EventSrvc) {
					return EventSrvc.getRecent(2);
				}],

				// Fetches 5 recent albums
				album: ['AlbumSrvc', function(AlbumSrvc) {
					return AlbumSrvc.getRecent();
				}],

				slideshow: ['SlideshowSrvc', function(SlideshowSrvc) {
					return SlideshowSrvc.getRecent();
				}]
			}
		};

		// Default
		$stateProvider.state(home);
		
	}
]);