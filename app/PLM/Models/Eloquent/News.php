<?php namespace PLM\Models\Eloquent;

class News extends \Eloquent {

	/**
	 * Table used by the model
	 *
	 * @var string
	 */
	protected $table = 'news';

	/**
	 * Columns guarded by the array
	 *
	 * @var array
	 */
	protected $guarded = array('*');

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
	 * Take last five from the table
	 *
	 * @param 	$query 	Builder
	 * @param 	int 	$limit
	 * @return 	$query
	 */
	public function scopeRecent($query, $limit = 5)
	{
		return $query->orderBy('id', 'desc')->take($limit);
	}

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
		return $this->belongsTo('NewsType', 'type_id');
	}

}