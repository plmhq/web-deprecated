<?php

use Faker\Factory as Faker;

class MilestoneSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$db = DB::table('milestones');
		$db->delete();

		$faker = Faker::create();

		$data = [
			[
				'id'			=> 1,
				'user_id'		=> 1,
				'era_id'		=> 1,
				'description'	=> $faker->sentence(5),
				'date'			=> date('Y-m-d'),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 2,
				'user_id'		=> 1,
				'era_id'		=> 1,
				'description'	=> $faker->sentence(4),
				'date'			=> date('Y-m-d'),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 3,
				'user_id'		=> 1,
				'era_id'		=> 1,
				'description'	=> $faker->sentence(5),
				'date'			=> date('Y-m-d'),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 4,
				'user_id'		=> 1,
				'era_id'		=> 2,
				'description'	=> $faker->sentence(5),
				'date'			=> date('Y-m-d'),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 5,
				'user_id'		=> 1,
				'era_id'		=> 2,
				'description'	=> $faker->sentence(6),
				'date'			=> date('Y-m-d'),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 6,
				'user_id'		=> 1,
				'era_id'		=> 2,
				'description'	=> $faker->sentence(5),
				'date'			=> date('Y-m-d'),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 7,
				'user_id'		=> 1,
				'era_id'		=> 2,
				'description'	=> $faker->sentence(5),
				'date'			=> date('Y-m-d'),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 8,
				'user_id'		=> 1,
				'era_id'		=> 3,
				'description'	=> $faker->sentence(5),
				'date'			=> date('Y-m-d'),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 9,
				'user_id'		=> 1,
				'era_id'		=> 3,
				'description'	=> $faker->sentence(5),
				'date'			=> date('Y-m-d'),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 10,
				'user_id'		=> 1,
				'era_id'		=> 3,
				'description'	=> $faker->sentence(5),
				'date'			=> date('Y-m-d'),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 11,
				'user_id'		=> 1,
				'era_id'		=> 3,
				'description'	=> $faker->sentence(5),
				'date'			=> date('Y-m-d'),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			]
		];

		$db->insert($data);
	}
}