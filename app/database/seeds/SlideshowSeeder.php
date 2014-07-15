<?php

use Faker\Factory as Faker;

class SlideshowSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$db = DB::table('slideshows');
		$db->delete();

		$faker = Faker::create();

		$data = [
			[
				'id'			=> 1,
				'user_id'		=> 1,
				'image'			=> '..jpg',
				'caption'		=> $faker->paragraph(2);
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 2,
				'user_id'		=> 1,
				'image'			=> '..jpg',
				'caption'		=> $faker->paragraph(1);
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 3,
				'user_id'		=> 1,
				'image'			=> '..jpg',
				'caption'		=> $faker->paragraph(3);
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 4,
				'user_id'		=> 1,
				'image'			=> '..jpg',
				'caption'		=> $faker->paragraph(2);
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 5,
				'user_id'		=> 1,
				'image'			=> '..jpg',
				'caption'		=> $faker->paragraph(1);
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],
		];

		$db->insert($data);
	}
}