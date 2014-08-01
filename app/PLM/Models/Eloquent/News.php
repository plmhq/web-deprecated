<?php namespace PLM\Models\Eloquent;

class News extends AbstractModel {

	/**
	 * Table used by the model
	 *
	 * @var string
	 */
	protected $table = 'news';

	/**
	 * Columns fillable by the model
	 *
	 * @var array
	 */
	protected $fillable = array(
		'user_id',
		'type_id',
		'title',
		'content',
		'image'
	);

	/**
	 * Table timestamps
	 *
	 * @var bool
	 */
	public $timestamps = true;

	/**
	 * ORM with the User model
	 *
	 * @return 	User
	 */
	public function user()
	{
		return $this->belongsTo('User');
	}

	/**
	 * ORM with the NewsType model
	 *
	 * @return 	NewsType
	 */
	public function type()
	{
		return $this->belongsTo('PLM\Models\Eloquent\NewsType', 'type_id');
	}

}