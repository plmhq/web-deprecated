<?php

use Faker\Factory as Faker;

class SpotlightSeeder extends Seeder {

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
				'user_id'		=> 1,
				'title'			=> $faker->sentence(3),
				'image'			=> '..jpg',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 2,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(4),
				'image'			=> '..jpg',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 3,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(2),
				'image'			=> '..jpg',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],
		];

		$db->insert($data);
	}
}