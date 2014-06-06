<?php namespace PLM\Repository\Eloquent;

use User;
use PLM\Repository\Interface\UserRepositoryInterface;

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