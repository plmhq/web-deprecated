<?php namespace PLM\Filters;

use Illuminate\Support\ServiceProvider;

class FilterServiceProvider extends ServiceProvider {

	/**
	 * Register filters
	 *
	 * @return 	void
	 */
	public function register()
	{
		$app = $this->app['router'];

		$app->filter('ssl', 'PLM\Filters\SSLFilter');
	}

}