<?php namespace PLM\Repository\Eloquent;

use PLM\Models\Eloquent\Slideshow;
use PLM\Repository\Interfaces\SlideshowRepositoryInterface;

class SlideshowRepository extends AbstractRepository implements SlideshowRepositoryInterface {

	/**
	 * Class constructor
	 *
	 * @param 	User 	$user
	 */
	public function __construct(Slideshow $Slideshow)
	{
		parent::__construct($slideshow);
	}

}