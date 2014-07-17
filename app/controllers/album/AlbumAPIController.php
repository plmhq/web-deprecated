<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use PLM\Validators\Exceptions\ValidationFailedException;
use PLM\Repository\Interfaces\AlbumRepositoryInterface;

class AlbumAPIController extends \BaseController {

	/**
	 * @var AlbumRepositoryInterface
	 */
	protected $album;

	/**
	 * Class constructor
	 *
	 * @param 	NewsRepositoryInterface 	$Album
	 */
	public function __construct(AlbumRepositoryInterface $album)
	{
		$this->album = $album;
	}

	/**
	 * Returns most recent news
	 *
	 * @param 	int 	$count
	 * @return 	Model
	 */
	public function getRecent($count = 5)
	{
		return $this->album->getRecent($count)->toJson();
	}

}