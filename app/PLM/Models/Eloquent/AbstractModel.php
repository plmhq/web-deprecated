<?php namespace PLM\Models\Eloquent;

abstract class AbstractModel extends \Eloquent {

	/**
	 * Columns guarded by the array
	 *
	 * @var array
	 */
	protected $guarded = array('*');

	/**
	 * Take recent from the table
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
	 * Mutate as timestamp
	 *
	 * @return 	timestamp
	 */
	public function getCreatedAtAttribute($value)
	{
		return time($value);
	}

	/**
	 * Mutate as timestamp
	 *
	 * @return 	timestamp
	 */
	public function getUpdatedAtAttribute($value)
	{
		return time($value);
	}

}