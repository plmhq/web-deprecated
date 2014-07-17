var app = require('../app');

app.factory('NewsService', [
	'$q',
	'$http',
	function($q, $http) {
		var service = {
			/**
			 *
			 */
			instance: {},

			/**
			 *
			 */
			bundle: [],

			/**
			 *
			 */
			list: [],

			/**
			 *
			 */
			getRecent: function(limit) {
				// $q instance
				var
					q	 	= $q.defer(),
					url 	= 'api/x/news/recent/' + limit,
					request = $http.get(url);

				// Run the request with a self-invoking function
				// to pass the this (the service) object
				request
					.success( (function(_this) {
						return function(r) {
							_this.bundle = r;
							q.resolve();
						};
					})(this) )
					.error(function() {
						q.reject();
					});

				return q.promise;
			},

			/**
			 *
			 */
			getImageLink: function(image) {
				return '/assets/images/upload/news/' + image;
			},

			/**
			 *
			 */
			formatDate: function(format, date) {
				var parsed = Date.parse(date);

				return parsed.toString(format);
			}
		};

		return service;
	}
]);