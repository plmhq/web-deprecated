<?php namespace PLM\Model\Eloquent;

class Album extends \Eloquent {

	/**
	 * Table used by the model
	 *
	 * @var string
	 */
	protected $table = 'albums';

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
		'description'
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
	 * @return 	Model
	 */
	public function user()
	{
		return $this->belongsTo('User');
	}

	/**
	 * ORM with the AlbumPhoto modek
	 *
	 * @return 	AlbumPhoto
	 */
	public function photos()
	{
		return $this->hasMany('AlbumPhoto');
	}

}