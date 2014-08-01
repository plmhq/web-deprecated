<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use PLM\Validators\Exceptions\ValidationFailedException;
use PLM\Repository\Interfaces\MilestoneEraRepositoryInterface;
use Illuminate\Foundation\Application;

class MilestoneEraController extends \BaseController {

	/**
	 * @var MilestoneEraRepositoryInterface
	 */
	protected $milestoneEra;

	/**
	 * @var App instance
	 */
	protected $app;

	/**
	 * Class constructor
	 *
	 * @param 	MilestoneEraRepositoryInterface 	$milestoneEra
	 */
	public function __construct(MilestoneRepositoryInterface $milestoneEra, Application $app)
	{
		$this->app = $app;
		$this->milestoneEra = $milestoneEra;
	}

	/**
	 * Display a paginated listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$count = $this->app['request']->get('limit');

		return $this->milestoneEra
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
			$this->milestoneEra->create( $this->input->all() );
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
			$milestoneEra = $this->milestoneEra->find($id)->toJson();
		} catch(ModelNotFoundException $e) {
			return Response::json(['status' => false]);
		}

		return Response::json([
			'status' 	=> true,
			'Milestone'		=> $milestoneEra
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
			$milestoneEra = $this->milestoneEra->update($id, $input)->toJson();
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
			'Milestone'		=> $milestoneEra
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
