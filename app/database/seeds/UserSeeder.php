<?php

class UserSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$db = DB::table('users');
		$db->delete();

		$password = Hash::make('test');

		$data = [
			[
				'id'			=> 1,
				'username'		=> 'test',
				'password'		=> $password,
				'email'			=> 'test@test.com',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 2,
				'username'		=> 'test',
				'password'		=> $password,
				'email'			=> 'test2@test.com',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			]
		];

		$db->insert($data);
	}
}