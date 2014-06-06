<?php namespace PLM\Filter;

use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;

class SSLFilter {

	/**
	 * @var Request
	 */
	protected $request;

	/**
	 * @var Redirector
	 */
	protected $redirect;

	/**
	 * Class constructor
	 *
	 * @param 	Request 	$request
	 * @param 	Redirector 	$redirect
	 */ 
	public function __construct(Request $request, Redirector $redirect)
	{
		$this->request = $request;
		$this->redirect = $redirect;
	}

	/**
	 * Forces the pages to be ran on SSL
	 *
	 * @return Redirector|void
	 */
	public function filter()
	{
		// If the request was not on SSL,
		// refresh page and run his request on SSL
		if( !$this->request->secure() )
		{
			$path = $this->request->path();
			return $this->redirect->secure( $path );
		}
	}
	
}