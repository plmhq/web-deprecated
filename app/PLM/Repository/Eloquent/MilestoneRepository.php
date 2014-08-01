<?php namespace PLM\Repository\Eloquent;

use PLM\Models\Eloquent\Milestone;
use PLM\Repository\Interfaces\MilestoneRepositoryInterface;

class MilestoneRepository extends AbstractRepository implements MilestoneRepositoryInterface {

	/**
	 * Class constructor
	 *
	 * @param 	User 	$user
	 */
	public function __construct(Milestone $milestone)
	{
		parent::__construct($milestone);
	}

}