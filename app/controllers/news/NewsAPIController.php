<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use PLM\Validator\Exceptions\ValidationFailedException;
use PLM\Repository\Interfaces\NewsRepositoryInterface;

class NewsAPIController extends \BaseController {

	/**
	 * @var NewsRepositoryInterface
	 */
	protected $news;

	/**
	 * Class constructor
	 *
	 * @param 	NewsRepositoryInterface 	$news
	 */
	public function __construct(NewsRepositoryInterface $news)
	{
		$this->news = $news;
	}

	/**
	 * Returns most recent news
	 *
	 * @param 	int 	$count
	 * @return 	Model
	 */
	public function getRecentNews($count = 5)
	{
		$this->news->getRecent($count);
	}

}