<?php namespace PLM\Repository\Eloquent;

use PLM\Models\Eloquent\Event;
use PLM\Repository\Interfaces\EventRepositoryInterface;

class EventRepository extends AbstractRepository implements EventRepositoryInterface {

	/**
	 * Class constructor
	 *
	 * @param 	User 	$user
	 */
	public function __construct(Event $event)
	{
		parent::__construct($event);
	}

	/**
	 * Take recent events
	 *
	 * @param 	int 	$limit
	 * @return 	Model
	 */
	public function getRecent($limit = null)
	{
		return $this->model->recent($limit)->get();
	}

}