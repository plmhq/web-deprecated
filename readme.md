plm-web
======

The official repository of the Pamantasan ng Lungsod ng Maynila website. Currently built with AngularJS, Laravel, and MySQL. Uses redis for its session, caches, and hits.

Soon, adding gulp.js, replacing RequireJS with Browserify, and SaSS + Compass

## Installation ##

	Requires PHP >= 5.5, Composer, MySQL >= 5.6, Redis => 2.6, and Bower.

	$ git clone https://github.com/srph/plm-web.git
	$ composer update
	$ php artisan migrate
	$ bower update
	
	// Optional
	$ php artisan seed
	
## Trello ##

[Trello] (https://trello.com/b/k1vqoXPB/plm-web) helps *me* break down tasks.

## Contributions ##

All contributions (small or big) will be granted with its respective credit.

- Mr. Garry De Gracia - Project Manager
- Kier Borromeo (SRPH) - Lead Developer


## License ##

This software is under the [GPL v3 license] (https://github.com/srph/plm-web/blob/master/LICENSE) | [mirror] (http://choosealicense.com/licenses/gpl-v3/)
