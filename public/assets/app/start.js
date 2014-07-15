// Bootstrap
var start = function() {
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['app']);
	});

	console.log('Starting PLM app...');
};

module.exports = start;