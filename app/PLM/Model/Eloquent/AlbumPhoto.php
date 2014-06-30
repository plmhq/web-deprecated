<?php namespace PLM\Model\Eloquent;

class AlbumPhoto extends \Eloquent {

	/**
	 * Table used by the model
	 *
	 * @var string
	 */
	protected $table = 'album_photos';

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

	}

	/**
	 * ORM with the Album model
	 *
	 * @return 	Album
	 */
	public function album()
	{
		return $this->belongsTo('Album');
	}

}