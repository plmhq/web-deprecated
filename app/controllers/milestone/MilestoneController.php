<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use PLM\Validators\Exceptions\ValidationFailedException;
use PLM\Repository\Interfaces\MilestoneRepositoryInterface;
use Illuminate\Foundation\Application;

class MilestoneController extends \BaseController {

	/**
	 * @var MilestoneRepositoryInterface
	 */
	protected $milestone;

	/**
	 * @var App instance
	 */
	protected $app;

	/**
	 * Class constructor
	 *
	 * @param 	MilestoneRepositoryInterface 	$milestone
	 */
	public function __construct(MilestoneRepositoryInterface $milestone, Application $app)
	{
		$this->app = $app;
		$this->milestone = $milestone;
	}

	/**
	 * Display a paginated listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$count = $this->app['request']->get('limit');

		return $this->milestone
			->paginate( $count )
			->toJson();
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
			$this->milestone->create( $this->input->all() );
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
			$milestone = $this->milestone->find($id)->toJson();
		} catch(ModelNotFoundException $e) {
			return Response::json(['status' => false]);
		}

		return Response::json([
			'status' 	=> true,
			'Milestone'		=> $milestone
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
			$milestone = $this->milestone->update($id, $input)->toJson();
		} catch(ModelNotFoundException $e) {
			return Response::json(['status' => false]);
		} catch(ValidationFailedException $e) {
			return Response::json([
				'status' => false,
				'errors' => $e->getMessage()
			]);
		}

		return Response::json([
			'status'	=> true,
			'Milestone'		=> $milestone
		]);
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
