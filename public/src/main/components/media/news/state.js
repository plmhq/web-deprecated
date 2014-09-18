app.config(function($stateProvider) {

	var news = {
		name: 'media.news',
		url: '?page',
		templateUrl: '/src/main/components/media/news/tpl.html',
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

	$stateProvider.state(news);
});