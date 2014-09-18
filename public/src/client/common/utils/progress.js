/* Configurations */
app.config(function(ngProgressLiteProvider) {
	ngProgressLiteProvider.settings.minimum = 0.15;
	ngProgressLiteProvider.settings.speed = 500;
	ngProgressLiteProvider.settings.ease = 'ease-in-drop';
});

/* At rune time */
app.run(function($rootScope, $timeout, ngProgressLite) {
	var start 	= function () { ngProgressLite.start(); }
	var done	= function () { ngProgressLite.done(); }

	$rootScope.$on('$stateChangeStart', function() { start(); });
	$rootScope.$on('$stateChangeSuccess', function() { done(); });
	$rootScope.$on('$stateChangeError', function() { done(); });
	$rootScope.$on('$stateNotFound', function() { done() });
});