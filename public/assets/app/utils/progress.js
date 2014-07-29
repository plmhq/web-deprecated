var app = require("../app");

/* Configurations */
app.config([
	'ngProgressLiteProvider',
	function(ngProgressLiteProvider) {
		ngProgressLiteProvider.settings.minimum = 0.15;
		ngProgressLiteProvider.settings.speed = 500;
		ngProgressLiteProvider.settings.ease = 'ease-in-drop';
	}
]);

/* At rune time */
app.run([
	'$rootScope',
	'$timeout',
	'ngProgressLite',
	function($rootScope, $timeout, ngProgressLite) {
		var start = function() { ngProgressLite.start(); }
		var compl = function() { ngProgressLite.done(); }

		$rootScope.$on('$stateChangeStart', function() { start(); });
		$rootScope.$on('$stateChangeSuccess', function() { compl(); });
		$rootScope.$on('$stateChangeError', function() { compl(); });
		$rootScope.$on('$stateNotFound', function() { compl() });
	}
]);