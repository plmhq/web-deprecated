/**
 * Allows a reuse of angular bootstrpa
 * in a try-catch block
 *
 * ++ as shorthand for both modules
 * @param	{string}	app
 * @return	{void}
 */
function bootstrap (app) {
	try {
		angular.bootstrap(document, modules, config);
	} catch(e) {
		console.error(e.stack || e.message || e);
	}
}