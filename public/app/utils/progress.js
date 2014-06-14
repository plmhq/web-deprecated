define(['../app'], function(app) {
	'use strict';

	app.run([
		'$rootScope',
		'ngProgress',
		'$timeout',
		function($rootScope, ngProgress, $timeout) {
			var start = function() { ngProgress.start(); }
			var compl = function() { ngProgress.complete(); }
			
			var appStart = function() {
				start();
				$timeout(function() {
					$rootScope.$emit('$app.start');
				}, 2000)
			}

			$rootScope.$on('$app.start', function() { compl() });

			appStart();

			$rootScope.$on('$stateChangeStart', function() { start(); });
			$rootScope.$on('$stateChangeSuccess', function() { compl(); });
			$rootScope.$on('$stateChangeError', function() { compl(); });
			$rootScope.$on('$stateNotFound', function() { compl() });
		}
	]);
});