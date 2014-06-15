<?php

use Faker\Factory as Faker;

class NewsSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$db = DB::table('news');
		$db->delete();

		$faker = Faker::create();

		$data = [
			[
				'id'			=> 1,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(),
				'content'		=> $faker->paragraphs(),
				'created_at'	=> date(),
				'updated_at'	=> date()
			],

			[
				'id'			=> 2,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(),
				'content'		=> $faker->paragraphs(),
				'created_at'	=> date(),
				'updated_at'	=> date()
			],

			[
				'id'			=> 3,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(),
				'content'		=> $faker->paragraphs(),
				'created_at'	=> date(),
				'updated_at'	=> date()
			],

			[
				'id'			=> 4,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(),
				'content'		=> $faker->paragraphs(),
				'created_at'	=> date(),
				'updated_at'	=> date()
			],

			[
				'id'			=> 5,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(),
				'content'		=> $faker->paragraphs(),
				'created_at'	=> date(),
				'updated_at'	=> date()
			],

			[
				'id'			=> 6,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(),
				'content'		=> $faker->paragraphs(),
				'created_at'	=> date(),
				'updated_at'	=> date()
			],
		];

		$db->insert($data);
	}
}