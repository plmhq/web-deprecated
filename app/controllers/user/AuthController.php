<?php

class AuthController extends BaseController {

	/**
	 * Logout
	 *
	 * @return 	Response
	 */
	public function getLogout()
	{
		$this->user->logout();
	}

	/**
	 * Authenticate
	 *
	 * @return 	Response
	 */
	public function postLogin()
	{
		// Account credentials
		$data = array(
			'username' => Input::get('username'),
			'password' => Input::get('password')
		);

		// Remember user session
		$remember = Input::get('remember');

		if( $this->user->login($data, $remember) )
		{
			//
		}

		//
	}

}