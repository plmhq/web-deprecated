define(['../module'], function(app) {
	'use strict';

	return app.factory('AuthService', [
		'$q',
		'$http',
		function($q, $http) {
			var service = {
				/**
				 * Attempt to login the user
				 *
				 * @return $http
				 */
				attempt: function(data) {
					var url = ' ';
					var request = $http.post(url);

					return request;
				};

				/**
				 * Check auth (session) status
				 *
				 * @return $q
				 */
				check: function() {
					var defer = $q.defer();
					var url = ' ';
					var request = $http.get(url)

					request.success(function(r) {
						return (r) ? defer.resolve() : defer.reject();
					});

					return defer.promise;
				};

				/**
				 * Logout the authenticated user
				 *
				 * @return $http
				 */
				logout: function() {
					var url = ' ';
					var request = $http.get(url);

					return request;
				}
			};

			return service;
		}
	]);
});