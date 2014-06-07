plm-web
======

The official repository of the Pamantasan ng Lungsod ng Maynila website. Currently built with AngularJS, Laravel, and MySQL. Uses redis for its session, caches, and hits.

## Installation ##

	Requires PHP >= 5.5, Composer, MySQL >= 5.6, Redis => 2.6, and Bower.

	$ git clone https://github.com/srph/plm-web.git
	$ composer update
	$ php artisan migrate
	$ bower update
	
	// Optional
	$ php artisan seed

## Contributions ##

All contributions (small or big) will be granted with its respective credit.
