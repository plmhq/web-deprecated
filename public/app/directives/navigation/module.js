define(['../module'], function(app) {
	'use strict';

	app.directive('navigation', function() {
		var link = function(element, scope, attrs) {
			var top = element.scrollTop();
			var win = angular.element($window);

			win.scroll(function(e) {
				if( win.scrollTop() > top) {
					// check if it is possible to get current css values
					// element.css({
					// 	position: i
					// });
				} else {
					// element.css({});
				}
			});
		};

		var object = {
			restrict: 'EA',
			templateUrl: '',
			link: link
		};

		return object;
	});
})