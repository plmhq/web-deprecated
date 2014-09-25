<?php namespace PLM\Common\ValidationTrait;

use PLM\Common\Exceptions\ValidationException;

trait ValidationTrait {

	/**
	 * Validates itself
	 *
	 */
	public function validate(Validator $validator, array $inputs = [])
	{
		// Shorthands
		$rules = !is_null($this->rules) ? $this->rules : [] ;
		$messages = !is_null($this->messages) ? $this->messages : [];

		$validation = $validator->make($inputs, $rules, $messages)

		if ( $validation->fails() )
		{
			throw new ValidationException(
				$validation->messages()->toArray()
			);
		}
	}
}