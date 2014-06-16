define(['../app'], function(app) {
	'use strict';

	var controller = [
		'$scope',
		'$timeout',
		function($scope, $timeout) {
			// 
		}
	];

	return app.directive('bigCountdownTimer', [
		function() {
			return {
				restrict: 'EA',
				templateUrl: '/app/directives/big-countdown-timer/partial.html',
				controller: controller
			}
		}
	]);
});