<?php namespace PLM\Repository\Eloquent;

use Illuminate\Database\Eloquent\ModelNotFoundException;

abstract class EloquentRepository {

	/**
	 * @Inject
	 * @var Model
	 */
	protected $model;

	/**
	 * Class constructor
	 *
	 * @param 	Model 	$model
	 */
	public function __construct($model = null)
	{
		if( is_null($model) )
		{
			throw new ModelNotFoundException;
		}

		$this->model = $model;
	}

	/**
	 * Fetch all resources
	 *
	 * @return 	Model
	 */
	public function all()
	{
		return $this->model->all();
	}

	/**
	 * Create a resource
	 *
	 * @param 	array 	$input
	 * @return 	bool
	 */
	public function create(array $input = array())
	{
		return $this->model->newInstance($input)->save();
	}

	/**
	 * Update the specified resource
	 *
	 * @param 	int 	$id
	 * @param 	array 	$input
	 * @return 	bool
	 */
	public function update($id, array $input = array())
	{
		$model = $this->getById($id);

		return $model->fill($input)->save();
	}

	/**
	 * Get resource with the specified id
	 *
	 * @param 	integer 	$id
	 * @return 	Model
	 */
	public function find($id)
	{
		return $this->model->find($id);
	}

}