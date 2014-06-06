<?php namespace PLM\Repository;

interface SlideshowRepositoryInterface {

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

}