<?php namespace PLM\Models\Eloquent;

class Slideshow extends AbstractModel {

	/**
	 * Table used by the model
	 *
	 * @var string
	 */
	protected $table = 'slideshows';

	/**
	 * Columns fillable by the model
	 *
	 * @var array
	 */
	protected $fillable = array(
		'user_id',
		'image',
		'caption'
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
	
}