<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use PLM\Validators\Exceptions\ValidationFailedException;
use PLM\Repository\Interfaces\MilestoneRepositoryInterface;
use PLM\Repository\Interfaces\MilestoneEraRepositoryInterface;
use Illuminate\Foundation\Application;

class MilestoneExtController extends \BaseController {

	/**
	 * @var MilestoneRepositoryInterface
	 */
	protected $milestone;

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
	 * @param 	MilestoneRepositoryInterface 	$milestone
	 */
	public function __construct(
		Application $app,
		MilestoneRepositoryInterface $milestone,
		MilestoneEraRepositoryInterface $milestoneEra
	)
	{
		$this->app = $app;
		$this->milestone = $milestone;
		$this->milestoneEra = $milestoneEra;
	}

	/**
	 * Returns an era along with its milestones
	 *
	 * @return 	Response
	 */
	public function getCollection()
	{
		return $this->milestoneEra
			->getCollection()
			->toJson();
	}

}