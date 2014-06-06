<?php namespace PLM\Repository\Eloquent;

use News;
use PLM\Repository\Interface\NewsRepositoryInterface;

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