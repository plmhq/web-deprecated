function SlideshowSrvc ($http, $q) {
	var slideshow = {
		/**
		 * List of slideshow data
		 *
		 */
		bundle: [],
		
		/**
		 * Return the URL of the given filename
		 *
		 * @param 	{str}
		 * @return 	{str}
		 */
		getImageURL: function(filename) {
			var url = '/assets/img/uploads/slides/' + filename;
			return url;
		},

		/**
		 *
		 * @param 	{int} 	count 	@default - 5
		 * @return 	$q
		 */
		getRecent: function(count) {
			// Set default for the passed argument
			var count = ( angular.isUndefined(count) )
				? 5
				: false;
			// $q instance
			var q = $q.defer();

			// Request
			var url 	= '/api/x/slideshow/recent/' + count;
			var request = $http.get(url);

			// A self-invoking function to include the
			// 'this' reference to our service
			request
				.success( (function(_this) {
					return function(res) {
						_this.bundle = res;
						q.resolve();
					}
				}(this)) )
				.error(function() {
					q.reject('An error has occured while fetching');
				});
			return q.promise;
		}
	}

	return slideshow;
}

app.factory('SlideshowSrvc', SlideshowSrvc);