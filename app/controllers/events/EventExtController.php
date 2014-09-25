<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use PLM\Validators\Exceptions\ValidationFailedException;
use PLM\Repository\Interfaces\EventRepositoryInterface;

class EventExtController extends \BaseController {

	/**
	 * @var EventRepositoryInterface
	 */
	protected $event;

	/**
	 * Class constructor
	 *
	 * @param 	NewsRepositoryInterface 	$event
	 */
	public function __construct(EventRepositoryInterface $event)
	{
		$this->event = $event;
	}

	/**
	 * Returns most recent news
	 *
	 * @param 	int 	$count
	 * @return 	Model
	 */
	public function getRecent($count = 2)
	{
		return $this->event->getRecent($count)->toJson();
	}

}