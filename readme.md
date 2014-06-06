plm-web
======

The official repository of the Pamantasan ng Lungsod ng Maynila website. Currently built with AngularJS, Laravel, and MySQL. Uses redis for its session, caches, and hits.

To install, simply

	$ git clone https://github.com/srph/plm-web.git
	$ composer update
	$ php artisan migrate
	// Optional
	$ php artisan seed
