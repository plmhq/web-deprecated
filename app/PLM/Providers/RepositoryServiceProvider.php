<?php

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider {

	/**
	 * Bind repository interfaces
	 *
	 * @return 	void
	 */
	public function register()
	{
		// Binds the user repository
		$this->app->bind('PLM\Repository\UserRepositoryInterface',
			'PLM\Repository\Eloquent\UserRepository');

		// Binds the news repository
		$this->app->bind('PLM\Repository\NewsRepositoryInterface',
			'PLM\Repository\Eloquent\NewsRepository');

		// Binds the slideshow repository
		$this->app->bind('PLM\Repository\SlideshowRepositoryInterface',
			'PLM\Repository\Eloquent\SlideshowRepository');
	}
	
}