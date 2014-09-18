function EventSrvc($http, $q) {
	var service = {
		/**
		 *
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
		getRecent: function(limit) {
			var
			// $q instance
				q 	= $q.defer();

			// $http request
				url 	= '/api/x/event/recent/' + limit;
				request	= $http.get(url);

			// Start the request with a self-invoking function to pass the
			// this(the service) object. If anything goes wrong, reject promise.
			// Otherwise, resolve.
			request
				.success( (function(_this) {
					return function(res) {
						_this.bundle = res;
						q.resolve();
					};
				})(this) )
				.error(function() {
					q.reject();
				});

				return q.promise;
		}
	}

	return service;
}

angular.module('app').factory('EventSrvc', EventSrvc);