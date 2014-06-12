<?php

use PLM\Validator\Exceptions\ValidationFailedException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use PLM\Repository\Interface\SlideshowRepositoryInterface;

class SlideshowController extends \BaseController {

	/**
	 * @var SlideshowRepositoryInterface
	 */
	protected $slideshow;

	/**
	 * Class constructor
	 *
	 * @param 	SlideshowRepositoryInterface 	$slideshow
	 */
	public function __construct(SlideshowRepositoryInterface $slideshow)
	{
		$this->slideshow = $slideshow;
	}


	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return $this->slideshow->all();
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
		try {
			$this->slideshow->create($input);
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
			$slideshow = $this->slideshow->find($id);
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
			$slideshow = $this->slideshow->update($id, $input);
		} catch(ModelNotFoundException $e) {
			//
		} catch(ValidationFailedException $e) {
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
			$this->slideshow->delete($id);
		} catch(ModelNotFoundException $e) {
			//
		}
		
		return;
	}


}
