<?php namespace PLM\Repository\Eloquent;

abstract class AbstractRepository {

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
			throw new Exception;
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
		return $this->model->findOrFail($id);
	}

	/**
	 * Delete resource with the specified id
	 *
	 * @param 	integer 	$id
	 * @return 	bool
	 */
	public function delete($id)
	{
		return $this->find($id)->delete();
	}

	/**
	 * Take the first $count
	 *
	 * @param 	int 	$count
	 * @return 	Model
	 */
	public function get($count = 5)
	{
		return $this->model->take($count)->get();
	}

	/**
	 * Returns the paginated instance of the model
	 *
	 * @return 	Paginator
	 */
	public function paginate($count = 5)
	{
		return $this->model->paginate( $count );
	}

	/**
	 * Take recent slideshows
	 *
	 * @param 	int 	$limit
	 * @return 	Model
	 */
	public function getRecent($limit = null)
	{
		return $this->model->recent($limit)->get();
	}

}