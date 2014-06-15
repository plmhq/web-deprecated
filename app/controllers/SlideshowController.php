<?php

use PLM\Validator\Exceptions\ValidationFailedException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use PLM\Repository\Interfaces\SlideshowRepositoryInterface;

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
		return $this->slideshow->all()->toJson();
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
			return Response::json([
				'status' => false,
				'errors' => $e->getMessage()
			]);
		}

		return Response::json(['status' => true]);
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
			$slideshow = $this->slideshow->find($id)->toJson();
		} catch(ModelNotFoundException $e) {
			return Response::json(['status'	=> false]);
		}

		return Response::json([
			'status'	=> true,
			'slideshow'	=>	$slideshow
		]);
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
		$input = $this->input->all();

		try {
			$slideshow = $this->slideshow->update($id, $input);
		} catch(ModelNotFoundException $e) {
			return Response::json(['status' => false]);
		} catch(ValidationFailedException $e) {
			return Response::json([
				'status' => false,
				'errors' => $e->getMessage()
			]);
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
