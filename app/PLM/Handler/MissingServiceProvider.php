<?php namespace PLM\Handler;

use Illuminate\Support\ServiceProvider;

/**
 * Handle missing application
 */
class MissingServiceProvider extends ServiceProvider {

	/**
	 * Register bindings
	 *
	 * @return 	void
	 */
	public function register()
	{
		$this->app->missing(function($exception)
		{
			// Todo:
			// Remove the hard-coded dependency, the Request facade.
			//
			// Jeff says,
			// "The IO container doesn't have the variables injected
			// compared on using the Facade. The only possible way
			// to replicate is to create a new request instance provided
			// with parameters to make it work."
			if ( ! \Request::is('/api/*') )
			{
				return $this->app['view']->make('index');
			}
		});
	}

}