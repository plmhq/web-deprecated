<?php

class BaseController extends Controller {

	/**
	 * @var Input
	 */
	protected $input;

	/**
	 * @var Redirector
	 */
	protected $redirect;

	/**
	 * @var Response
	 */
	protected $response;

	/**
	 * @var Validator
	 */
	protected $validator;

	/**
	 * Class constructor
	 *
	 * @param 	Input 	$input
	 * @param 	Redirect$redirect
	 * @param 	Response$response
	 * @param 	Validator$validator
	 */
	public function __construct(Input $input, Redirect $redirect, Response $response, Validator $validator)
	{
		$this->input = $input;
		$this->redirect = $redirect;
		$this->response = $response;
		$this->validator = $validator;
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
