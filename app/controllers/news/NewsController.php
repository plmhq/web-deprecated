<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use PLM\Validators\Exceptions\ValidationFailedException;
use PLM\Repository\Interfaces\NewsRepositoryInterface;
use Illuminate\Foundation\Application;

class NewsController extends \APIController {

	/**
	 * @var NewsRepositoryInterface
	 */
	protected $news;

	/**
	 * @var App instance
	 */
	protected $app;

	/**
	 * Class constructor
	 *
	 * @param 	NewsRepositoryInterface 	$news
	 */
	public function __construct(NewsRepositoryInterface $news, Application $app)
	{
		$this->app = $app;
		$this->news = $news;
	}

	/**
	 * Display a paginated listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$count = $this->app['request']->get('limit');

		return $this->respondOK(
			$this->news->paginate( $count )
		);
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
			$this->news->create( $this->input->all() );
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
			$news = $this->news->find($id)->toJson();
		} catch(ModelNotFoundException $e) {
			return Response::json(['status' => false]);
		}

		return Response::json([
			'status' 	=> true,
			'news'		=> $news
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
			$news = $this->news->update($id, $input)->toJson();
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
			'news'		=> $news
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
