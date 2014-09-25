<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

/**
 * API route group
 * @link api/*
 * @example api/user/
 */
Route::group(['prefix' => 'api/v1'], function()
{
	/**
	 * @link /api/auth/*
	 */
	Route::controller('auth', 'AuthController');

	/**
	 * @link /api/user/*
	 */
	Route::resource('user', 'UserController');

	/**
	 * @link /api/slideshow/*
	 */
	Route::resource('slideshow', 'SlideshowController');
	Route::controller('slideshow', 'SlideshowExtController');

	/**
	 * @link /api/news/*
	 */
	Route::controller('news', 'NewsExtController');
	Route::resource('news', 'NewsController');

	/**
	 * @link /api/event/*
	 */Route::controller('event', 'EventExtController');
	Route::resource('event', 'EventController');

	/**
	 * @link /api/album/*
	 */
	Route::controller('album', 'AlbumExtController');
	Route::resource('album', 'AlbumController');

	/**
	 *
	 */
	Route::controller('milestone', 'MilestoneExtController');
	Route::resource('milestone', 'MilestoneController');
	Route::resource('milestone-era', 'MilestoneEraController');
});

/**
 * Dashboard view
 *
 * @link /dashboard
 */
Route::get('/dashboard', 'HomeController@dashboard');

/**
 * Default view
 *
 * @link /
 */
Route::get('/', 'HomeController@index');