<?php

use Faker\Factory as Faker;

class AlbumSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$db = DB::table('albums');
		$db->delete();

		$faker = Faker::create();

		$data = [
			[
				'id'			=> 1,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(3),
				'description'	=> $faker->paragraph(3),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 2,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(3),
				'description'	=> $faker->paragraph(3),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 3,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(2),
				'description'	=> $faker->paragraph(1),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 4,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(2),
				'description'	=> $faker->paragraph(1),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 5,
				'user_id'		=> 1,
				'title'			=> $faker->sentence(2),
				'description'	=> $faker->paragraph(1),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],
		];

		$db->insert($data);
	}
}