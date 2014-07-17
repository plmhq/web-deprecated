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

}