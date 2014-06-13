<?php

use Faker\Factory as Faker;

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

		$faker = Faker::create();

		$data = [
			[
				'id'			=> 1,
				'username'		=> 'test',
				'password'		=> Hash::make('test'),
				'email'			=> 'test@test.com'
				'created_at'	=> date(),
				'updated_at'	=> date(),
			],

			[
				'id'			=> 2,
				'username'		=> 'test',
				'password'		=> Hash::make('test'),
				'email'			=> 'test@test.com'
				'created_at'	=> date(),
				'updated_at'	=> date(),
			]
		];

		$db->insert($data);
	}
}