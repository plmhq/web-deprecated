<?php namespace PLM\Models\Eloquent;

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends AbstractModel implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;

	/**
	 * The baase table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * Columns fillable by the model
	 *
	 * @var array
	 */
	protected $fillable = array(
		'username',
		'password',
		'email'
	);

	/**
	 * Table timestamps
	 *
	 * @var bool
	 */
	public $timestamps = true;

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password', 'remember_token');

	/**
	 * ORM with the News model
	 *
	 * @return 	News
	 */
	public function entries()
	{
		return $this->hasMany('News', 'news_id');
	}

	/**
	 * ORM with the Slideshow model
	 *
	 * @return 	Slideshow
	 */
	public function slides()
	{
		return $this->hasMany('Slideshow', 'slideshow_id');
	}

	/**
	 * ORM with the Event model
	 *
	 * @return 	Model
	 */
	public function events()
	{
		return $this->hasMany('Event');
	}

	/**
	 * ORM with the Album model
	 *
	 * @return 	Album
	 */
	public function albums()
	{
		return $this->hasMany('Album');
	}

	/**
	 * ORM with the AlbumPhotos model
	 *
	 * @return 	AlbumPhotos
	 */
	public function albumPhotos()
	{
		return $this->hasMany('AlbumPhoto');
	}

}
