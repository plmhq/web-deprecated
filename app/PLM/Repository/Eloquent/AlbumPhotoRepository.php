<?php namespace PLM\Repository\Eloquent;

use PLM\Models\Eloquent\AlbumPhoto;
use PLM\Repository\Interfaces\AlbumPhotoRepositoryInterface;

class AlbumPhotoRepository extends AbstractRepository implements AlbumPhotoRepositoryInterface {

	/**
	 * Class constructor
	 *
	 * @param 	User 	$user
	 */
	public function __construct(AlbumPhoto $albumPhoto)
	{
		parent::__construct($albumPhoto);
	}

}