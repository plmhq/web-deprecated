var app = require('../app');

app.factory('NewsService', [
	'$q',
	'$http',
	function($q, $http) {
		var object = {
			/**
			 *
			 */
			instance: '',

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
			getBundle: function(count) {
				var defer = $q.defer();
				var url = 'api/x/news/recent-news/' + count;
				var request = $http.get(url);
				var obj = this;

				request.success(function(r) {
					obj.bundle = r;
					defer.resolve();
				}).error(function(r) {
					defer.reject();
				});

				return defer.promise
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

		return object;
	}
]);