<?php namespace PLM\Models\Eloquent;

class MilestoneEra extends AbstractModel {

	/**
	 * Table used by the model
	 *
	 * @var string
	 */
	protected $table = 'milestone_eras';

	/**
	 * Columns fillable by the model
	 *
	 * @var array
	 */
	protected $fillable = array(
		'title',
		'from',
		'to'
	);

	/**
	 * Table timestamps
	 *
	 * @var bool
	 */
	public $timestamps = true;

	/**
	 * ORM with the Milestone modek
	 *
	 * @return 	Milestone
	 */
	public function milestones()
	{
		return $this->hasMany('PLM\Models\Eloquent\Milestone', 'era_id', 'id');
	}

}