var app = require('../app');

app.factory('MilestoneSrvc', [
	'$http',
	'$q',
	function($http, $q) {
		var service = {
			/** 
			 *
			 */
			eraCollection: [],

			/**
			 *
			 */
			eraInstance: {},

			/**
			 *
			 */
			instance: {},

			/**
			 *
			 */
			getEraCollection: function() {
				//
				var q = $q.defer();

				//
				var url 	= '/api/x/milestone/collection';
				var request = $http.get(url);

				request
					.success( (function(_this) {
						return function(response) {
							_this.eraCollection = response;
							q.resolve();
						}
					})(this) )
					.error(function() {
						q.reject();
					});

				return q.promise;
			},

			/**
			 * @function
			 * Checks if the given index is the last position in
			 * the eraCollection
			 *
			 * @see
			 * this.eraCollection
			 *
			 * @param
			 * {int}		index
			 *
			 * @return
			 * boolean
			 */
			isLastInTheCollection: function(index) {
				var lastPosition = this.eraCollection.length - 1
				return ( angular.equals(lastPosition, index) ) ? true : false;
			}
		};

		return service;
	}
]);