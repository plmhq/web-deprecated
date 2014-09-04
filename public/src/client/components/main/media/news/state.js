var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var news = {
			name: 'main.media.news',
			url: '?page',
			templateUrl: '/src/client/main/media/news/tpl.html',
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