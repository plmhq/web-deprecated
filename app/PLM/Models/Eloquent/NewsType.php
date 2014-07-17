<?php namespace PLM\Models\Eloquent;

class NewsTypes extends AbstractModel {

	/**
	 * Table used by the model
	 *
	 * @var string
	 */
	protected $table = 'news_types';

	/**
	 * Columns fillable by the model
	 *
	 * @var array
	 */
	protected $fillable = array('title');

	/**
	 * Table timestamps
	 *
	 * @var bool
	 */
	public $timestamps = false;

	/**
	 * ORM with the News model
	 *
	 * @return 	News
	 */
	public function entries()
	{
		return $this->hasMany('News', 'type_id');
	}

}