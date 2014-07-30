var app = require('../app');

app.factory('NewsSrvc', [
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
			 * @param 	{int} 	limit
			 * @return  $q
			 */
			getAll: function(page, limit) {
				// Defaults
				var defaults = angular.extend({
					page: 5,
					limit: 15
				}, {
					page: page,
					limit: limit
				})

				// Promise
				var q = $q.defer();

				// Request
				var url 	= 'api/rest/news?page=' + defaults.page + '&limit=' + defaults.limit;
				var request = $http.get(url);

				request
					.success( function(_this) {
						return function(r) {
							_this.bundle = r.data;
							console.log(r);
							q.resolve();
						}
					}(this) )
					.error(function() {
						console.log('Error');
						q.reject('An error has occured');
					});

				return q.promise;
			},

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