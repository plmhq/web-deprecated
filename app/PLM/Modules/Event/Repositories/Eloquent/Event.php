<?php namespace PLM\Modules\Event\Repositories\Eloquent;

use PLM\Modules\Event\Models\Event as EventModel;
use PLM\Modules\Event\Repositories\EventInterface;

class Event extends AbstractRepository implements EventInterface {

	/**
	 * Class constructor
	 *
	 * @param 	User 	$user
	 */
	public function __construct(EventModel $event)
	{
		parent::__construct($event);
	}

}