<?php namespace PLM\Models\Eloquent;

class AlbumPhoto extends Base {

	/**
	 * Table used by the model
	 *
	 * @var string
	 */
	protected $table = 'album_photos';

	/**
	 * Columns fillable by the model
	 *
	 * @var array
	 */
	protected $fillable = array(
		'user_id',
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
	 * ORM with the Album model
	 *
	 * @return 	Album
	 */
	public function album()
	{
		return $this->belongsTo('PLM\Models\Eloquent\Album');
	}

}