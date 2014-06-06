<?php namespace PLM\Repository\Eloquent;

use Slideshow;
use PLM\Repository\Interface\SlideshowRepositoryInterface;

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