<?php namespace PLM\Modules\Album\Repositories\Eloquent;

use PLM\Modules\Album\Models\Album;
use PLM\Modules\Album\Interfaces\Album;

class Album extends AbstractRepository implements AlbumRepositoryInterface {

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