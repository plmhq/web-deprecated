<?php

use PLM\Validator\Exceptions\ValidationFailedException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use PLM\Repository\Interfaces\SlideshowRepositoryInterface;

class SlideshowExtController extends \BaseController {

	/**
	 * @var SlideshowRepositoryInterface
	 */
	protected $slideshow;

	/**
	 * Class constructor
	 *
	 * @param 	SlideshowRepositoryInterface 	$slideshow
	 */
	public function __construct(SlideshowRepositoryInterface $slideshow)
	{
		$this->slideshow = $slideshow;
	}

	/**
	 * Returns most recent resource
	 *
	 * @param 	int 	$count
	 * @return 	Model
	 */
	public function getRecent($count = 5)
	{
		return $this->slideshow->getRecent($count)->toJson();
	}

}