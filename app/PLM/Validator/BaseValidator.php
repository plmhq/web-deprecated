<?php namespace PLM\Validator;

use Illuminate\Validation\Factory as Validator;

abstract class BaseValidator {

	/**
	 * @var Illuminate\Validation\Factory
	 */
	protected $validator;

	/**
	 * Class constructor
	 *
	 * @param Validator $validator
	 */
	public function __construct(Validator $validator)
	{
		$this->validator = $validator;
	}

	/**
	 * Validate resource for update
	 *
	 * @return 	Validator
	 */
	public function forUpdate(array $input = array())
	{
		//
	}

	/** 
	 * Validate resource for creation
	 *
	 * @return 	Validator
	 */
	public function forCreation(array $input = array())
	{
		//
	}

}