<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class FillNewsTypesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		$data = [
			[
				'id'	=> 1,
				'title'	=> 'Article'
			],

			[
				'id'	=> 2,
				'title'	=> 'Spotlight'
			],

			[
				'id'	=> 3,
				'title'	=> 'Photojournal'
			],
		];

		DB::table('news_types')->insert($data);
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		DB::table('news_types')->truncate();
	}

}
