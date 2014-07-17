<?php namespace PLM\Models\Eloquent;

class Event extends AbstractModel {

	/**
	 * Table used by the model
	 *
	 * @var string
	 */
	protected $table = 'events';

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
	 * Date mutator
	 *
	 * @return 	array
	 */
	public function getDates()
	{
		return array('created_at', 'updated_at', 'date');
	}

	/**
	 * Mutate the date property to a timestamp
	 *
	 * @param 	str 		$value
	 * @return 	void
	 */
	public function getDateAttribute($value)
	{
		return time($value);
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