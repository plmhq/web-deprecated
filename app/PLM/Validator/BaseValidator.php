<?php namespace PLM\Validator;

namespace Illuminate\Validation\Factory;

abstract class BaseValidator {

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