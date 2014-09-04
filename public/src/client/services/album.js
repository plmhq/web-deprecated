function AlbumSrvc ($http, $q) {
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
		 * Get recent albums
		 *
		 */
		getRecent: function(limit) {
			var
				// $q instance
				q = $q.defer();
				// Fallback to default or conventional configuration
				// if no parameter was provided
				limit 	= limit || 5;
				// Request ($http) instance
				url 	= '/api/x/album/recent/' + limit;
				request = $http.get(url);
				// Start the request with a self-invoked function to pass the 'this' object (service)
				// Then proceed with resolving and rejecting the promise.
				request
					.success( (function(_this) {
						return function(res) {
							angular.copy(res, _this.bundle);
							q.resolve();
						};
					})(this) )
					.error(function() {
						q.reject();
					});
				return $q.promise;
		}
	};

	return service;
}

app.factory('AlbumSrvc', AlbumSrvc);