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
				'content'		=> $faker->paragraph(),
				'image'			=> 'GGGGG.jpg',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d')
			],

			[
				'id'			=> 2,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(),
				'content'		=> $faker->paragraph(),
				'image'			=> 'jK62Z.jpg',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d')
			],

			[
				'id'			=> 3,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(),
				'content'		=> $faker->paragraph(),
				'image'			=> 'jX4JK.jpg',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d')
			],

			[
				'id'			=> 4,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(),
				'content'		=> $faker->paragraph(),
				'image'			=> 'x325JK.jpg',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d')
			],

			[
				'id'			=> 5,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(),
				'content'		=> $faker->paragraph(),
				'image'			=> 'sDgJK5.jpg',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d')
			]
		];

		$db->insert($data);
	}
}