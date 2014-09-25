<?php namespace PLM\Modules\Slideshow\Models;

use PLM\Common\AbstractModel as Model;

class Slideshow extends Model {

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
		return $this->belongsTo('PLM\Models\Eloquent\User');
	}
	
}