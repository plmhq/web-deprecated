var start = function() {
	angular.element(document).ready(function() {
		var modules = ['app'],
			config = { strictDi: true };

		// Catch any exception being thrown when
		// our app is being boostrapped to the
		// document
		try {
			angular.bootstrap(document, modules, config);
		} catch(e) {
			console.log(e.stack || e.message || e);
		}

		console.info('Starting PLM app...');
	});
};

module.exports = start;