<?php namespace PLM\Repository\Eloquent;

use PLM\Models\Eloquent\Album;
use PLM\Repository\Interfaces\AlbumRepositoryInterface;

class AlbumRepository extends AbstractRepository implements AlbumRepositoryInterface {

	/**
	 * Class constructor
	 *
	 * @param 	User 	$user
	 */
	public function __construct(Album $album)
	{
		parent::__construct($album);
	}

}