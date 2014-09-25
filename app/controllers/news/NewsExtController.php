<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use PLM\Validators\Exceptions\ValidationFailedException;
use PLM\Repository\Interfaces\NewsRepositoryInterface;

class NewsExtController extends \BaseController {

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
	public function getRecent($count = 5)
	{
		return $this->news->getRecent($count)->toJson();
	}

}