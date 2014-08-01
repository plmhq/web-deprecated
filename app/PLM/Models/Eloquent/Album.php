<?php namespace PLM\Models\Eloquent;

class Album extends AbstractModel {

	/**
	 * Table used by the model
	 *
	 * @var string
	 */
	protected $table = 'albums';

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
		return $this->belongsTo('PLM\Models\Eloquent\User');
	}

	/**
	 * ORM with the AlbumPhoto modek
	 *
	 * @return 	AlbumPhoto
	 */
	public function photos()
	{
		return $this->hasMany('PLM\Models\Eloquent\AlbumPhoto');
	}

}