<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use PLM\Validator\Exceptions\ValidationFailedException;
use PLM\Repository\Interface\UserRepositoryInterface;

class UserController extends \BaseController {

	/**
	 * @var UserRepositoryInterface
	 */
	protected $user;

	/**
	 * Class constructor
	 *
	 * @param 	UserRepositoryInterface 	$user
	 */
	public function __construct(UserRepositoryInterface $user)
	{
		$this->user = $user;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return $this->user->all();
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		// Fetch all input
		$input = Input::all();

		try {
			$this->user->create($input);
		} catch(ValidationFailedException $e) {
			//
		}

		//
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		try {
			$this->user->find($id);
		} catch(ModelNotFoundException $e) {
			//
		}

		//
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		// Fetch all input
		$input = Input::all();

		try {
			$this->user->update($id, $input);
		} catch(ValidationFailedException $e) {
			//
		} catch(ModelNotFoundException $e) {
			//
		}

		//
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		try {
			$this->user->delete($id);
		} catch(ModelNotFoundException $e) {
			//
		}

		//
	}


}
