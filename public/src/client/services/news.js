function NewsSrvc ($q, $http) {
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
		pagination: {},

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
						_this._paginate(r);
						// If the server returned no item in the collection,
						// there is probably no item in the page at all.
						// This is over the offset, and must be rejected.
						if ( _this.bundle.length <= 0 ) {
							q.reject()
						} else {
							q.resolve();
						}
					}
				}(this) )
				.error(function() {
					q.reject('An error has occured');
				});
			return q.promise;
		},

		/**
		 * @ngdoc
		 *
		 * @function
		 * Processes the pagination data given as response by the server
		 *
		 * @see
		 * The angular.forEach method
		 * https://docs.angularjs.org/api/ng/function/angular.forEach
		 *
		 * @returns
		 * void
		 */
		_paginate: function(response) {
			angular.forEach(response, function(value, key) {
				// @this
				// References to the service as passed in the
				// second paramter of this function
				if( !angular.equals(key, 'data') ) {
					this.pagination[key] = value;
				} else {
					this.bundle = response.data;
				}
			}, this);
		},

		/**
		 *
		 * @function
		 * Returns the pagination property's current_page property
		 *
		 * @see
		 * this.pagination
		 * 
		 * @returns
		 * int
		 */
		getCurrentPage: function() {
			return this.pagination.current_page;
		},

		/**
		 *
		 * @function
		 * Returns the pagination property's last_page property
		 *
		 * @see
		 * this.pagination
		 * 
		 * @returns
		 * int
		 */
		getLastPage: function() {
			return this.pagination.last_page;
		},

		/**
		 *
		 * @function
		 * Returns either the current or next page
		 *
		 * @see
		 * this.pagination
		 *
		 * @param
		 * currentPage 	{int} 	Optional  The page to base on.
		 *
		 * @returns
		 * int
		 */
		getNextPage: function(currentPage) {
			currentPage = currentPage || this.getCurrentPage();
			return ( this.isLastPage() ) ? currentPage : currentPage + 1;
		},

		/**
		 *
		 * @function
		 * Returns either the current or previous page
		 *
		 * @see
		 * this.pagination
		 *
		 * @param
		 * currentPage 	{int} 	Optional  The page to base on.
		 *
		 * @returns
		 * int
		 */
		getPreviousPage: function(currentPage) {
			currentPage = currentPage || this.getCurrentPage();
			return ( this.isFirstPage() ) ? currentPage : currentPage - 1;
		},

		/**
		 * @ngdoc
		 *
		 * @function
		 * Checks if the current page is the last page
		 * based on the pagination date
		 *
		 * @see
		 * this.pagination
		 * this._paginate(response)
		 *
		 * @returns
		 * boolean
		 */
		isLastPage: function() {
			var data = this.pagination;
			return ( data.current_page >= data.last_page ) ? true : false;
		},

		/**
		 * @ngdoc
		 *
		 * @function
		 * Checks if the current page is the first page
		 * based on the pagination date
		 *
		 * @see
		 * this.pagination
		 * this._paginate(response)
		 *
		 * @returns
		 * boolean
		 */
		isFirstPage: function() {
			var data = this.pagination;
			return ( data.current_page <= 1 ) ? true : false;
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

app.factory('NewsSrvc', NewsSrvc);