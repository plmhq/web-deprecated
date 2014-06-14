define(['../module'], function(app) {
	'use strict';

	return app.directive('countdown', [function() {
		var controller = [
			'$scope',
			'$timeout',
			function($scope, $timeout) {

			// Formats the given date
			var format = function(d, h, m, s) {
				return d + ' days and ' +
					h + ':' +
					m + ':' +
					s + '';
			}

			var getSeconds = function(a, b) {
				return (a - b) / 1000;
			}

			// Keeps the counter going
			var count = function() {
				current = new Date();
				seconds = getSeconds(target.getTime(), current.getTime());
				
				// Days
				var d = parseInt(seconds / 86400);
				seconds = seconds % 86400;

				console.log(d);

				// Hours
				var h = parseInt(seconds / 3600);
				seconds = seconds % 3600;

				// Minutes andseconds
				var m = parseInt(seconds / 60);
				var s = parseInt(seconds % 60);

				// Format
				$scope.remaining = format(d, h, m, s);

				// Recursion
				// $timeout(count, 1000);
				timer();
			}

			// Create the remaining scope variable
			// $scope.remaining = new Date();

			// Object containing current and countdown time
			var current = new Date(),
				target = new Date("June 19, 2014"),
				seconds = getSeconds(target.getTime(), current.getTime());

			// Countdown timer
			var timer = function() {
				if(current.getTime() < target.getTime()) {
					$timeout(count, 1000);
				} else {
					//
				}
			}

			// Call the countdown timer
			timer();
		}];

		return {
			restrict: 'EA',
			templateUrl: 'app/directives/countdown/partial.html',
			controller: controller
		};
	}]);
});