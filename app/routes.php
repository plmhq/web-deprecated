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
Route::group(['prefix' => 'api'], function()
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

	/**
	 * @link /api/news/*
	 */
	Route::resource('rest/news', 'NewsController');
	Route::controller('x/news', 'NewsAPIController');
});

/**
 * Index page
 * @link /
 */
Route::get('/', 'HomeController@index');