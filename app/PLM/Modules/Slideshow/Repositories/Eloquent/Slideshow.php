<?php namespace PLM\Modules\Slideshow\Repository\Eloquent;

use PLM\Modules\Slideshow\Repository\SlideshowInterface;

class Slideshow extends AbstractRepository implements SlideshowInterface {

	/**
	 * Class constructor
	 *
	 * @param 	User 	$user
	 */
	public function __construct(Slideshow $slideshow)
	{
		parent::__construct($slideshow);
	}

}