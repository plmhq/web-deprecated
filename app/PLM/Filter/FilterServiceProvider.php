<?php namespace PLM\Filter;

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

		$app->filter('ssl', 'PLM\Filter\SSLFilter');
	}

}