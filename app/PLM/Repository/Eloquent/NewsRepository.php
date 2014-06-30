<?php namespace PLM\Repository\Eloquent;

use PLM\Models\Eloquent\News;
use PLM\Repository\Interfaces\NewsRepositoryInterface;

class NewsRepository extends AbstractRepository implements NewsRepositoryInterface {

	/**
	 * Class constructor
	 *
	 * @param 	User 	$user
	 */
	public function __construct(News $news)
	{
		parent::__construct($news);
	}

}