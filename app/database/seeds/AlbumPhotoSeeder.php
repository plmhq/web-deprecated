<?php

use Faker\Factory as Faker;

class AlbumPhotoSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$db = DB::table('album_photos');
		$db->delete();

		$faker = Faker::create();

		$data = [
			[
				'id'			=> 1,
				'user_id'		=> 1,
				'album_id'		=> 1,
				'image'			=> '..jpg',
				'description'	=> $faker->paragraph(3),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 2,
				'user_id'		=> 1,
				'album_id'		=> 1,
				'image'			=> '..jpg',
				'description'	=> $faker->paragraph(3),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 3,
				'user_id'		=> 1,
				'album_id'		=> 1,
				'image'			=> '..jpg',
				'description'	=> $faker->paragraph(3),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],

			[
				'id'			=> 4,
				'user_id'		=> 1,
				'album_id'		=> 1,
				'image'			=> '..jpg',
				'description'	=> $faker->paragraph(3),
				'created_at'	=> date('Y-m-d'),
				'updated_at'	=> date('Y-m-d'),
			],
		];

		$db->insert($data);
	}
}