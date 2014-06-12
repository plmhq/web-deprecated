<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use PLM\Validator\Exceptions\ValidationFailedException;
use PLM\Repository\Interface\NewsRepositoryInterface;

class NewsController extends \BaseController {

	/**
	 * @var NewsRepositoryInterface
	 */
	protected $news;

	public function __construct(NewsRepository $news)
	{
		$this->news = $news;
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return $this->news->all();
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
		// Grab all input
		$input = Input::all();

		try {
			$this->news->create( $input );
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
			$this->news->find($id);
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
		try {
			$this->news->find($id);
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
		//
	}


}
