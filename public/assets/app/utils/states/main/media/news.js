var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var news = {
			name: 'main.media.news',
			url: '?page',
			templateUrl: '/assets/app/views/_main/children/media/children/news/_template.html',
			data: {
				title: 'Media: News',
				rawTitle: 'News'
			},
			resolve: {
				news: ['NewsSrvc', '$stateParams', function(NewsSrvc, $stateParams) {
					return NewsSrvc.getAll($stateParams.page, 9);
				}]
			}
		};

		$stateProvider
			.state(news);
	}
]);