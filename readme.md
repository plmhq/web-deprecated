plm-web
======

The official repository of the Pamantasan ng Lungsod ng Maynila website. Currently built with AngularJS, Laravel, and MySQL. Uses redis for its session, caches, and hits.

## Installation ##

Requires PHP >= 5.5, Composer, MySQL >= 5.6, Redis >= 2.6, node.js, npm.

	$ git clone https://github.com/srph/plm-web.git
	# At the root of our application
	$ composer update
	$ php artisan migrate
	$ php artisan seed
	$ npm install -g bower
	$ npm install -g gulp
	$ npm install

	# Important to run while modifying scripts, images, or sass
	$ gulp watch
	
## Project Management ##

[Trello](https://trello.com/b/k1vqoXPB/plm-web) helps *me* break down tasks.

## Contributions ##

All contributions (small or big) will be granted with its respective credit.

- Mr. Garry De Gracia - Project Manager
- Kier Borromeo (SRPH) - Lead Developer

## License ##

This software is under the [GPL v3 license](https://github.com/srph/plm-web/blob/master/LICENSE) | [mirror](http://choosealicense.com/licenses/gpl-v3/)