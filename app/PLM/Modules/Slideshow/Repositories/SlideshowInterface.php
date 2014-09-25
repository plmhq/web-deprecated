<?php namespace PLM\Modules\Slideshow\Repository;

interface SlideshowInterface {

	/**
	 * Fetch all resources
	 *
	 * @return 	Model
	 */
	public function all();

	/**
	 * Create a resource
	 *
	 * @param 	array 	$input
	 * @return 	bool
	 */
	public function create(array $input = array());

	/**
	 * Update the specified resource
	 *
	 * @param 	int 	$id
	 * @param 	array 	$input
	 * @return 	bool
	 */
	public function update($id, array $input = array());

	/**
	 * Get resource with the specified id
	 *
	 * @param 	integer 	$id
	 * @return 	Model
	 */
	public function find($id);

	/**
	 * Delete resource with the specified id
	 *
	 * @param 	integer 	$id
	 * @return 	bool
	 */
	public function delete($id);

	/**
	 * Take the first $count
	 *
	 * @param 	int 	$count
	 * @return 	Model
	 */
	public function get($count = 5);

	/**
	 * Returns the paginated instance of the model
	 *
	 * @return 	Paginator
	 */
	public function paginate($count = 5);

	/**
	 * Take recent slideshows
	 *
	 * @param 	int 	$limit
	 * @return 	Model
	 */
	public function getRecent($limit = null);

}