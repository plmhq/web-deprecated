define(['../module'], function(app) {
	'use strict';

	app.directive('navigation', [
		'$window',
		function($window) {
		var pre = function() {
			var elm = angular.element('.navbar-cus');
			var top = elm.offset().top;
			var win = angular.element($window);

			win.scroll(function(e) {
				if( win.scrollTop() > top) {
					// check if it is possible to get current css values
					// element.css({
					// 	position: i
					// });
					// elm.appendTo('html, body');
					// var newElm = angular.element('.navbar-cus')[1];
					// // newElm.hide();
					// newElm.slideDown();
					// newElm.css({
					// 	width: '100%',
					// 	position: 'fixed',
					// 	zIndex: '100',
					// 	top: '0'
					// });
					// console.log('Oy');
				} else {
					// element.css({});
				}
			});
		};

		return {
			restrict: 'EA',
			templateUrl: 'app/directives/navigation/partial.html',
			compile: function() {
				return { pre: pre };
			}
		};
	}]);
})