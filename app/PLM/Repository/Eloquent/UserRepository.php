<?php namespace PLM\Repository\Eloquent;

use PLM\Models\Eloquent\User;
use PLM\Repository\Interfaces\UserRepositoryInterface;

class UserRepository extends AbstractRepository implements UserRepositoryInterface {

	/**
	 * Class constructor
	 *
	 * @param 	User 	$user
	 */
	public function __construct(User $user)
	{
		parent::__construct($user);
	}

}