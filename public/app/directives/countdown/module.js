define(['../module'], function(app) {
	'use strict';

	var controller = [
		'$scope',
		'$timeout',
		function($scope) {

		// Countdown timer
		$scope.timer = function() {
			while(current < countdown) {
				$timeout(function() {
					time.current++;
				}, 1000);
			}
		}

		// Object containing current and countdown time
		$scope.time = {};
		$scope.time.current = new Date();
		$scope.time.countdown: new Date($scope.time.current, 06, 19);

		// Call the countdown timer
		$scope.timer();
	}];

	var object = {
		restrict: 'EA',
		templateUrl: 'app/directives/countdown/partial.html',
		controller: controller 
	};

	return object;
});