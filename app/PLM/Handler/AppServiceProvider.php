<?php namespace PLM\Handler;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider {

	/**
	 * Register bindings
	 *
	 * @return 	void
	 */
	public function register()
	{
		$this->missing();
	}

	/**
	 * Handle missing application
	 *
	 * @return 	View
	 */
	public function missing()
	{
		$this->app->missing(function($exception)
		{
			return $this->app['view']->make('index');
		});
	}

}