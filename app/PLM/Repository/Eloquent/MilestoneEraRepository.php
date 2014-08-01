<?php namespace PLM\Repository\Eloquent;

use PLM\Models\Eloquent\MilestoneEra;
use PLM\Repository\Interfaces\MilestoneEraRepositoryInterface;

class MilestoneEraRepository extends AbstractRepository implements MilestoneEraRepositoryInterface {

	/**
	 * Class constructor
	 *
	 * @param 	User 	$user
	 */
	public function __construct(MilestoneEra $milestoneEra)
	{
		parent::__construct($milestoneEra);
	}

	/**
	 * Returns an collection of eras along with its respective milestones
	 *
	 * @return 	Model
	 */
	public function getCollection()
	{
		$collection = $this->model
			->all()
			->load('milestones');

		return $collection;
	}

	/**
	 * Returns an instance of era along with its milestones
	 *
	 * @return 	Model
	 */
	public function getInstance($id)
	{
		$instance = $this->model
			->find($id)
			->load('milestones');

		return $instance;
	}

}