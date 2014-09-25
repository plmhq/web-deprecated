<?php namespace PLM\Handlers;

use Illuminate\Support\ServiceProvider;

/**
 * Handles 404
 */
class MissingServiceProvider extends ServiceProvider {

	/**
	 * Register bindings
	 *
	 * @return 	void
	 */
	public function register()
	{
		// Shorthand to the app instance
		$app = $this->app;

		$app->missing(function($exception) use ($app)
		{
			// Shorthands
			$view  = $app['view'];
			$request = $app['request'];

			// If the request was mapped to the dashboard,
			// let the dashboard's front-end handle the route
			if( $request->is('dashboard/*') )
			{
				return $view->make('dashboard');
			}

			// If the request as mapped to the default line,
			// let the default's front-end handle the route
			if ( ! $request->is('api/*') )
			{
				return $view->make('index');
			}

		});
	}

}