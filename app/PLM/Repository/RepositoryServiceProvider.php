<?php namespace PLM\Repository;

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
		$this->app->bind('PLM\Repository\Interface\UserRepositoryInterface',
			'PLM\Repository\Eloquent\UserRepository');

		// Binds the news repository
		$this->app->bind('PLM\Repository\Interface\NewsRepositoryInterface',
			'PLM\Repository\Eloquent\NewsRepository');

		// Binds the slideshow repository
		$this->app->bind('PLM\Repository\Interface\SlideshowRepositoryInterface',
			'PLM\Repository\Eloquent\SlideshowRepository');
	}
	
}