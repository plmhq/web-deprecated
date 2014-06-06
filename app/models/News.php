<?php

class News extends Eloquent {

	/**
	 * Table used by the model
	 *
	 * @var string
	 */
	protected $table = 'news';

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
	protected $fillable = array('title', 'content');

	/**
	 * Table timestamps
	 *
	 * @var bool
	 */
	public $timestamps = true;

}