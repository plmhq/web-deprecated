define(['../module'], function(app) {
	'use strict';

	return app.directive('countdown', [function() {
		var controller = [
			'$scope',
			'$timeout',
			function($scope, $timeout) {

			// Check if the day has preceding zero
			var precedeZero = function(n) {
				if(n - 10 == 0) {
					return '00';
				} else if(n - 10 < 0) {
					return '0' + n;
				} else {
					return n;
				}
			}

			// Determine if day is to be shown
			var detDay = function(d) {

				if(d > 0) {
					var phrase = ( d == 1 )
						? 'day'
						: 'days';

					return d + ' ' + phrase + ' and ';
				}

				return '';
			}

			// Formats the given date
			var format = function(d, h, m, s) {
				return detDay(d) +
					precedeZero(h) + ':' +
					precedeZero(m) + ':' +
					precedeZero(s) + '';
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
				target = new Date("June 19, 2015"),
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