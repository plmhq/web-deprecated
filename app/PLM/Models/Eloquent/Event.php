<?php namespace PLM\Models\Eloquent;

class Event extends \Eloquent {

	/**
	 * Table used by the model
	 *
	 * @var string
	 */
	protected $table = 'events';

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
		'title',
		'date',
		'venue'
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
	 * @return 	Model
	 */
	public function user()
	{
		return $this->belongsTo('User');
	}

}