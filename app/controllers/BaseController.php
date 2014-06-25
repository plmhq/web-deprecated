<?php

use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request as Input;
use Illuminate\View\Factory as View;

class BaseController extends Controller {

	/**
	 * @var Input
	 */
	protected $request;

	/**
	 * @var Response
	 */
	protected $response;

	/**
	 * @var Validator
	 */
	protected $view;

	/**
	 * Class constructor
	 *
	 * @param 	Input 	$input
	 * @param 	Redirect$redirect
	 * @param 	Response$response
	 * @param 	View 	$view
	 */
	public function __construct(Input $input, Response $response, View $view)
	{
		$this->input = $input;
		$this->response = $response;
		$this->view = $view;
	}

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout);
		}
	}

}
