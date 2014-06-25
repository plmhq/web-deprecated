<?php

class AuthController extends BaseController {

	/**
	 * Class constructor
	 *
	 * @param 	Auth 	$auth
	 */
	public function __construct(Illuminate\Auth\AuthManager $auth)
	{
		$this->auth = $auth;
	}

	/**
	 * Logout
	 *
	 * @return 	Response
	 */
	public function getLogout()
	{
		$this->auth->logout();
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
			'username' => $this->input->get('username'),
			'password' => $this->input->get('password')
		);

		// Remember user session
		$remember = $this->input->get('remember');

		if( $this->auth->attempt($data, $remember) )
		{
			return $this->response->json(['status' => true]);
		}

		return $this->response->json(['status' => false]);
	}

	/**
	 * Returns whether session is auth or guest
	 *
	 * @return 	bool
	 */
	public function getCheck()
	{
		return $this->response->json($this->auth->check());
	}

	/**
	 * Returns whether session is guest or auth
	 *
	 * @return 	bool
	 */
	public function getGuest()
	{
		return $this->response->json($this->auth->guest());
	}

}