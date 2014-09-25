<?php namespace PLM\Common\Transformer;

use StdClass;

abstract class Transformer {

	/**
	 * Class constructor; Inject StdClass
	 * 
	 * @param StdClass $std
	 */
	public function __construct(StdClass $std)
	{
		$this->data = $std;
	}

	/**
	 * Paginates collection
	 *
	 * @todo	Abstraction
	 * @return 	StdClass
	 */
	public function paginate($model)
	{
		// Shorthand
		$data = $this->data;
		$data->collection = $model->data;

		// Pagination data
		$data->pagination 				= new \StdClass;
		$data->pagination->from 		= $model->from;
		$data->pagination->to 			= $model->to;
		$data->pagination->per_page 	= $model->per_page;
		$data->pagination->last_page 	= $model->per_page;
		$data->pagination->current_page = $model->per_page;

		return $data;
	}

	/**
	 * Transforms instance
	 *
	 * @param 	Model 	$model
	 * @param 	array 	$new
	 * @return 	StdClass
	 */
	public function instance($model, $new)
	{
		// Shorthand
		$data = $this->data;

		// Transform as indicated
		foreach($new as $key => $value)
		{
			$data->{$key} = $value;
		}

		return $new;
	}

	/**
	 * Transforms error
	 * 
	 * @param  array 	$errors
	 * @return StdClass
	 */
	public function error(array $errors = [])
	{
		// Shorthand
		$data = $this->data;

		$data->errors = $errors;

		return $data;
	}

}