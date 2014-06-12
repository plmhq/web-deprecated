<?php namespace PLM\Handler;

use Illuminate\View\Factory;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider {

	/**
	 * @var View
	 */
	public function $view;

	/**
	 * Class constructor
	 *
	 * @var 	View 	$view
	 */
	public function __construct(View $view)
	{
		$this->view = $view;

		parent::__construct();
	}

	/**
	 * Boot
	 *
	 * @return 	void
	 */
	public function boot()
	{
		$this->missing();

		parent::boot();
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
			return $this->view->make('index');
		});
	}

}