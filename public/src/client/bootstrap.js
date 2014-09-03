var modules = ['app'],
config = { strictDi: true };

// Catch any exception being thrown when
// our app is being boostrapped to the
// document
try {
	angular.bootstrap(document, modules, config);
} catch(e) {
	console.error(e.stack || e.message || e);
}