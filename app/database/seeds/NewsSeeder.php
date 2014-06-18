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
				'title'			=> 'New official PLM website diesng launchs',
				'content'		=> $faker->paragraph(),
				'image'			=> 'wIqe3.png',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d')
			],

			[
				'id'			=> 2,
				'user_id'		=> 1,
				'title'			=> 'Employee Service Awards Rites on',
				'content'		=> $faker->paragraph(),
				'image'			=> 'jK62Z.jpg',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d')
			],

			[
				'id'			=> 3,
				'user_id'		=> 1,
				'title'			=> 'PLM community: United through hand-praise',
				'content'		=> $faker->paragraph(),
				'image'			=> 'jX4JK.jpg',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d')
			],

			[
				'id'			=> 4,
				'user_id'		=> 1,
				'title'			=> 'Library Information System launch',
				'content'		=> $faker->paragraph(),
				'image'			=> 'x325JK.jpg',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d')
			],

			[
				'id'			=> 5,
				'user_id'		=> 1,
				'title'			=> 'PLM dedicates the new PLM Facade',
				'content'		=> $faker->paragraph(),
				'image'			=> 'sDgJK5.jpg',
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d')
			]
		];

		$db->insert($data);
	}
}