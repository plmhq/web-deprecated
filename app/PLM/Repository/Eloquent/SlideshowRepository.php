<?php namespace PLM\Repository\Eloquent;

use Slideshow;
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

	/**
	 * Take recent slideshows
	 *
	 * @param 	int 	$limit
	 * @return 	Model
	 */
	public function getRecent($limit = null)
	{
		return $this->model->recent($limit)->get();
	}

}