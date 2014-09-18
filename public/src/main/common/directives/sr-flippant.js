function srFlippant () {
	function link (scope, element, attributes) {
		var flip;
		var front = element.children('.front')[0];
		var back = element.children('.back')[0];

		function mouseIn () {
			flip = flippant.flip(front, back);
		}

		function mouseOut () {
			flip.close();
		}

		element.on('hover', mouseIn, mouseOut);
	}

	return {
		restrict: 'EA'
		transclude: true,
		template: '<div ng-transclude></div>'
		link: link
	}
}

app.directive('srFlippant', srFlippant);