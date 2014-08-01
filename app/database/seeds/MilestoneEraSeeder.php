<?php

use Faker\Factory as Faker;

class MilestoneEraSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$db = DB::table('milestone_eras');
		$db->delete();

		$faker = Faker::create();

		$data = [
			[
				'id'			=> 1,
				'title'			=> $faker->sentence(3),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 2,
				'title'			=> $faker->sentence(3),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 3,
				'title'			=> $faker->sentence(3),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],
		];

		$db->insert($data);
	}
}