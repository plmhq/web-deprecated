<?php namespace PLM\Models\Eloquent;

class Milestone extends AbstractModel {

	/**
	 * Table used by the model
	 *
	 * @var string
	 */
	protected $table = 'milestones';

	/**
	 * Columns fillable by the model
	 *
	 * @var array
	 */
	protected $fillable = array(
		'user_id',
		'era_id',
		'description',
		'date'
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

	/**
	 * ORM with the MilestoneEra model
	 *
	 * @return 	MilestoneEra
	 */
	public function era()
	{
		return $this->belongsTo('PLM\Models\Eloquent\MilestoneEra', 'id', 'era_id');
	}

}