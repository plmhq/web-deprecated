<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		$this->call('UserSeeder');
		$this->call('NewsSeeder');
		$this->call('EventSeeder');
		$this->call('SlideshowSeeder');
		$this->call('AlbumSeeder');
		$this->call('AlbumPhotoSeeder');
		$this->call('MilestoneSeeder');
		$this->call('MilestoneEraSeeder');
	}

}
