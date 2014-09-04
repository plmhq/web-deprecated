var dependencies = [
	'ui.router',
	'timer',
	'slick',
	'ngProgressLite'
];

angular.module('app', dependencies);
var modules = ['app'],
config = { strictDi: true };

// Catch any exception being thrown when
// our app is being boostrapped to the
// document
try {
	angular.bootstrap(document, modules, config);
} catch(e) {
	console.error(e.stack || e.message || e);
}



app.config(function ($stateProvider) {
	// Default state
	var main = {
		name: 'main',
		abstract: true,
		templateUrl: '/assets/app/views/_main/_template.html'
	};
	
	// Default
	$stateProvider.state(main);
});


var app = require("../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var career = {
			name: 'main.career',
			url: '/career',
			templateUrl: '/assets/app/views/_main/children/career/_template.html',
			data: {
				title: 'Careers'
			}
		};

		$stateProvider
			.state(career);
	}
]);
app.config(function ($stateProvider) {
	// Homepage

	var home = {
		name: 'main.home',
		url: '/',
		templateUrl: '/assets/app/views/_main/children/home/_template.html',
		data: {
			title: 'Home'
		},
		resolve: {
			// Fetches 6 revent news
			news: ['NewsSrvc', function(NewsSrvc) {
				return NewsSrvc.getRecent(6);
			}],
			// Fetches 2 recent events
			e: ['EventSrvc', function(EventSrvc) {
				return EventSrvc.getRecent(2);
			}],
			// Fetches 5 recent albums
			album: ['AlbumSrvc', function(AlbumSrvc) {
				return AlbumSrvc.getRecent();
			}],
			slideshow: ['SlideshowSrvc', function(SlideshowSrvc) {
				return SlideshowSrvc.getRecent();
			}]
		}
	};

	// Default
	$stateProvider.state(home);
});
var app = require("../../../app");

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		var media = {
			name: 'main.media',
			abstract: true,
			url: '/media',
			templateUrl: '/assets/app/views/_main/children/media/_template.html',
			data: {
				title: 'Media'
			}
		};

		$stateProvider
			.state(media);
	}
]);
var app = require("../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var profile = {
			name: 'main.university-profile',
			abstract: true,
			url: '/university-profile',
			templateUrl: '/assets/app/views/_main/children/university-profile/_template.html',
			data: {
				title: 'University Profile'
			}
		};

		$stateProvider
			.state(profile);
	}
]);
function HomeAlbumCtrl ($scope, AlbumSrvc) {
	$scope.instance = AlbumSrvc.instance;
	
	$scope.bundle = AlbumSrvc.bundle;
	
	// Home: the four thumbnails
	$scope.bundleSM = (function(bundle) {
		var newBundle = [];
		// Iterate each item and push to the list
		for(var _i = 1; _i < bundle.length; _i++) {
			newBundle[_i - 1] = bundle[_i];
		}
		return newBundle;
	})($scope.bundle);
}

app.controller('HomeAlbumCtrl', HomeAlbumCtrl);
function SlideshowCtrl ($scope, SlideshowSrvc) {
	$scope.slides = SlideshowSrvc.bundle;
	$scope.getImageURL = function(filename) {
		return SlideshowSrvc.getImageURL(filename);
	}
}

app.controller('SlideshowCtrl',	SlideshowCtrl);
var app = require('../app');

app.controller('AlbumCtrl', [
	'$scope',
	'AlbumSrvc',
	function($scope, AlbumSrvc) {
		$scope.instance = AlbumSrvc.instance;
		
		$scope.bundle = AlbumSrvc.bundle;

		// Home: the four thumbnails
		$scope.bundleSM = (function(bundle) {
			var newBundle = [];

			// Iterate each item and push to the list
			for(var _i = 1; _i < bundle.length; _i++) {
				newBundle[_i - 1] = bundle[_i];
			}

			return newBundle;
		})($scope.bundle);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var album = {
			name: 'main.media.album',
			url: '/album',
			templateUrl: '/assets/app/views/_main/children/media/children/album/_template.html',
			data: {
				title: 'Media: Albums',
				rawTitle: 'Albums'
			}
		};

		$stateProvider
			.state(album);
	}
]);
var app = require('../app');

app.controller('EventCtrl', [
	'$scope',
	'$filter',
	'EventSrvc',
	function($scope, $filter, EventSrvc) {
		//
		$scope.instance = EventSrvc.instance;

		//
		$scope.bundle = EventSrvc.bundle;
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var e = {
			name: 'main.media.event',
			url: '/event',
			templateUrl: '/assets/app/views/_main/children/media/children/event/_template.html',
			data: {
				title: 'Media: Events',
				rawTitle: 'Events'
			}
		};

		$stateProvider
			.state(e);
	}
]);
app = require("../app");

app.controller('NewsCtrl', [
	'$scope',
	'NewsSrvc',
	function($scope, NewsSrvc) {
		$scope.bundle = NewsSrvc.bundle;

		$scope.getImageLink = function(image) {
			return NewsSrvc.getImageLink(image);
		}

		$scope.formatDate = function(date) {
			return NewsSrvc.formatDate('MMMM dd, yyyy', date);
		}

		$scope.getCurrentPage = function() {
			return NewsSrvc.getCurrentPage();
		}

		$scope.getNextPage = function(currentPage) {
			return NewsSrvc.getNextPage(currentPage);
		}

		$scope.getPreviousPage = function(currentPage) {
			return NewsSrvc.getPreviousPage(currentPage);
		}

		$scope.isFirstPage = function() {
			return NewsSrvc.isFirstPage();
		}

		$scope.isLastPage = function() {
			return NewsSrvc.isLastPage();
		}
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var news = {
			name: 'main.media.news',
			url: '?page',
			templateUrl: '/assets/app/views/_main/children/media/children/news/_template.html',
			data: {
				title: 'Media: News',
				rawTitle: 'News'
			},
			resolve: {
				news: ['NewsSrvc', '$stateParams', function(NewsSrvc, $stateParams) {
					return NewsSrvc.getAll($stateParams.page, 9);
				}]
			}
		};

		$stateProvider
			.state(news);
	}
]);

var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.developmental-thrust',
			url: '/developmental-thrust',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/developmental-thrust/_template.html',
			data: {
				title: 'University Profile: Developmental Thrust',
				rawTitle: 'Developmental Thrust'
			}
		};

		$stateProvider
			.state(state);
	}
]);

var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.geographical-history',
			url: '/geographical-history',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/geographical-history/_template.html',
			data: {
				title: 'University Profile: Geographical History',
				rawTitle: 'Geographical History'
			}
		};

		$stateProvider
			.state(state);
	}
]);

var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.history',
			url: '/history',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/history/_template.html',
			data: {
				title: 'University Profile: History',
				rawTitle: 'History'
			}
		};

		$stateProvider
			.state(state);
	}
]);

var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.hymn',
			url: '/hymn',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/hymn/_template.html',
			data: {
				title: 'University Profile: Hymn',
				rawTitle: 'Hymn'
			}
		};

		$stateProvider
			.state(state);
	}
]);

var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.linkages-networks',
			url: '/linkages-networks',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/linkages-networks/_template.html',
			data: {
				title: 'University Profile: Linkages and Networks',
				rawTitle: 'Linkages and Networks'
			}
		};

		$stateProvider
			.state(state);
	}
]);

var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.memberships',
			url: '/memberships',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/memberships/_template.html',
			data: {
				title: 'University Profile: Memberships',
				rawTitle: 'Memberships'
			}
		};

		$stateProvider
			.state(state);
	}
]);
var app = require('../app');

app.controller('MilestoneCtrl', [
	'$scope',
	'MilestoneSrvc',
	function($scope, MilestoneSrvc) {
		//
		$scope.eraCollection = MilestoneSrvc.eraCollection;

		//
		$scope.eraInstance = MilestoneSrvc.eraInstance;

		//
		$scope.isLastInTheCollection = function(index) {
			return MilestoneSrvc.isLastInTheCollection(index);
		}
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.milestone-events',
			url: '/milestone-events',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/milestone-events/_template.html',
			data: {
				title: 'University Profile: Milestone Events',
				rawTitle: 'Milestone Events'
			},
			resolve: {
				milestones: ['MilestoneSrvc', function(MilestoneSrvc) {
					return MilestoneSrvc.getEraCollection();
				}]
			}
		};

		$stateProvider
			.state(state);
	}
]);

var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.mission-vision',
			url: '',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/mission-vision/_template.html',
			data: {
				title: 'University Profile: Mission and Vision',
				rawTitle: 'Mission and Vision'
			}
		};

		$stateProvider
			.state(state);
	}
]);

var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.philosophy',
			url: '/philosophy',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/philosophy/_template.html',
			data: {
				title: 'University Profile: Philosophy',
				rawTitle: 'Philosophy'
			}
		};

		$stateProvider
			.state(state);
	}
]);

var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.seal-and-colors',
			url: '/seal-and-colors',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/seal-and-colors/_template.html',
			data: {
				title: 'University Profile: Sean and Colors',
				rawTitle: 'Seal and Colors'
			}
		};

		$stateProvider
			.state(state);
	}
]);

var app = require("../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var profile = {
			name: 'main.university-profile',
			abstract: true,
			url: '/university-profile',
			templateUrl: '/assets/app/views/_main/children/university-profile/_template.html',
			data: {
				title: 'University Profile'
			}
		};

		$stateProvider
			.state(profile);
	}
]);
var app = require('../app');

app.factory('AlbumSrvc', [
	'$http',
	'$q',
	function($http, $q) {
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
])
var app = require('../app');

app.factory('AuthSrvc', [
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
			},
				
			/*
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
			},

			/**
			 * Logout the authenticated user
			 *
			 * @return $http
			 */
			logout: function() {
				var url = ' ';
				var request = $http.get(url);

				return request;
			},

			/**
			 * Check auth (session) status
			 *
			 * @return $q
			 */
			guest: function() {
				var defer = $q.defer();
				var url = ' ';
				var request = $http.get(url);

				request.success(function(r) {
					return (r) ? defer.resolve() : defer.reject();
				});

				return defer.promise;
			}
		};

		return service;
	}
]);
var app = require('../app');

app.factory('EventSrvc', [
	'$http',
	'$q',
	function($http, $q) {
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
]);
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
]);
var app = require("../app");

app.factory('SlideshowSrvc', [
	'$http',
	'$q',
	function($http, $q) {
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
]);
var app = require('../app');

app.factory('UserSrvc', [
	function() {
		var service = {};
			
		return service;
	}
]);
var app = require('../app');

app.factory('UtilSrvc', [
	function() {
		var service = {};

		return service;
	}
]);
var app = require("../app");

app.run([
	'$rootScope',
	'$state',
	'$stateParams',
	function($rootScope, $state, $stateParams) {
		// Reference the $state and $stateParams to the
		// $rootScope for accessibility
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}
]);
var app = require("../app");

app.config([
	'$locationProvider',
	function($locationProvider) {
		// HTML5 mode
		$locationProvider
			.html5Mode(true);
	}
]);
angular.module('app').config(function ($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
});
var app = require("../app");

/* Configurations */
app.config([
	'ngProgressLiteProvider',
	function(ngProgressLiteProvider) {
		ngProgressLiteProvider.settings.minimum = 0.15;
		ngProgressLiteProvider.settings.speed = 500;
		ngProgressLiteProvider.settings.ease = 'ease-in-drop';
	}
]);

/* At rune time */
app.run([
	'$rootScope',
	'$timeout',
	'ngProgressLite',
	function($rootScope, $timeout, ngProgressLite) {
		var start = function() { ngProgressLite.start(); }
		var compl = function() { ngProgressLite.done(); }

		$rootScope.$on('$stateChangeStart', function() { start(); });
		$rootScope.$on('$stateChangeSuccess', function() { compl(); });
		$rootScope.$on('$stateChangeError', function() { compl(); });
		$rootScope.$on('$stateNotFound', function() { compl() });
	}
]);
var
	_db 			= require("./states/_db"),
	_auth 			= require("./states/_db-auth"),
	_guest 			= require("./states/_db-guest"),
	_main 			= require("./states/_main"),

	/**
	 * main.home
	 */
	home 			= require("./states/main/home"),

	/**
	 * main.university-profile
	 */
	profile			= require("./states/main/university-profile"),
	dev_thrust	 	= require("./states/main/university-profile/developmental-thrust"),
	geo_history		= require("./states/main/university-profile/geographical-history"),
	history 		= require("./states/main/university-profile/history"),
	hymn 			= require("./states/main/university-profile/hymn"),
	link_net		= require("./states/main/university-profile/linkages-networks"),
	memberships		= require("./states/main/university-profile/memberships"),
	milestone		= require("./states/main/university-profile/milestone-events"),
	mis_vi_sion 	= require("./states/main/university-profile/mission-vision"),
	philosophy		= require("./states/main/university-profile/philosophy"),
	seal_colors 	= require("./states/main/university-profile/seal-and-colors"),
	univ_charter 	= require("./states/main/university-profile/university-charter"),

	/**
	 *
	 */
	media			= require("./states/main/media"),
	news 			= require("./states/main/media/news"),
	event 			= require("./states/main/media/event"),
	album 			= require("./states/main/media/album"),


	admission		= require("./states/main/admission"),
	career			= require("./states/main/career"),

	_missing 		= require("./states/_missing");
var app = require("../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		
		// Dashboard Auth
		var auth = {
			name: 'db.auth',
			abstract: true,
			templateUrl: '/assets/app/views/_db-auth/template.html',
			resolve: {
				auth: ['AuthService', function(AuthService) {
					return AuthService.check();
				}]
			}
		};

		// Dashboard Auth
		$stateProvider.state(auth);
		
	}
]);
var app = require("../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		
		// Dashboard guest
		var guest = {
			name: 'db.guest',
			url: '/login',
			templateUrl: '/assets/app/views/_db-guest/login.html',
			resolve: {
				guest: ['AuthService', function(AuthService) {
					return AuthService.guest();
				}]
			}	
		}

		// Dashboard Guest
		$stateProvider.state(guest);
		
	}
]);
var app = require("../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		// Dashboard
		var db = {
			name: 'db',
			abstract: true,
			url: '/dashboard'
		};
			
		$stateProvider.state(db);
		
	}
]);
var app = require("../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		// Default state
		var main = {
			name: 'main',
			abstract: true,
			templateUrl: '/assets/app/views/_main/_template.html'
		};

		// Default
		$stateProvider
			.state(main);
	}
]);
var app = require("../../app");

app.config([
	'$urlRouterProvider',
	function($urlRouterProvider) {

		// Missing routes
		$urlRouterProvider.otherwise('/');
			
	}
]);
var app = require("../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var admission = {
			name: 'main.admission',
			url: '/admission',
			templateUrl: '/assets/app/views/_main/children/admission/_template.html',
			data: {
				title: 'Admission'
			}
		};

		$stateProvider.state(admission);
	}
]);
var app = require("../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var career = {
			name: 'main.career',
			url: '/career',
			templateUrl: '/assets/app/views/_main/children/career/_template.html',
			data: {
				title: 'Careers'
			}
		};

		$stateProvider
			.state(career);
	}
]);
var app = require("../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		// Homepage
		var home = {
			name: 'main.home',
			url: '/',
			templateUrl: '/assets/app/views/_main/children/home/_template.html',
			data: {
				title: 'Home'
			},
			resolve: {
				// Fetches 6 revent news
				news: ['NewsSrvc', function(NewsSrvc) {
					return NewsSrvc.getRecent(6);
				}],

				// Fetches 2 recent events
				e: ['EventSrvc', function(EventSrvc) {
					return EventSrvc.getRecent(2);
				}],

				// Fetches 5 recent albums
				album: ['AlbumSrvc', function(AlbumSrvc) {
					return AlbumSrvc.getRecent();
				}],

				slideshow: ['SlideshowSrvc', function(SlideshowSrvc) {
					return SlideshowSrvc.getRecent();
				}]
			}
		};

		// Default
		$stateProvider.state(home);
		
	}
]);
var app = require("../../../app");

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		var media = {
			name: 'main.media',
			abstract: true,
			url: '/media',
			templateUrl: '/assets/app/views/_main/children/media/_template.html',
			data: {
				title: 'Media'
			}
		};

		$stateProvider
			.state(media);
	}
]);
var app = require("../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var profile = {
			name: 'main.university-profile',
			abstract: true,
			url: '/university-profile',
			templateUrl: '/assets/app/views/_main/children/university-profile/_template.html',
			data: {
				title: 'University Profile'
			}
		};

		$stateProvider
			.state(profile);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var album = {
			name: 'main.media.album',
			url: '/album',
			templateUrl: '/assets/app/views/_main/children/media/children/album/_template.html',
			data: {
				title: 'Media: Albums',
				rawTitle: 'Albums'
			}
		};

		$stateProvider
			.state(album);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var e = {
			name: 'main.media.event',
			url: '/event',
			templateUrl: '/assets/app/views/_main/children/media/children/event/_template.html',
			data: {
				title: 'Media: Events',
				rawTitle: 'Events'
			}
		};

		$stateProvider
			.state(e);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {

		var news = {
			name: 'main.media.news',
			url: '?page',
			templateUrl: '/assets/app/views/_main/children/media/children/news/_template.html',
			data: {
				title: 'Media: News',
				rawTitle: 'News'
			},
			resolve: {
				news: ['NewsSrvc', '$stateParams', function(NewsSrvc, $stateParams) {
					return NewsSrvc.getAll($stateParams.page, 9);
				}]
			}
		};

		$stateProvider
			.state(news);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.developmental-thrust',
			url: '/developmental-thrust',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/developmental-thrust/_template.html',
			data: {
				title: 'University Profile: Developmental Thrust',
				rawTitle: 'Developmental Thrust'
			}
		};

		$stateProvider
			.state(state);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.geographical-history',
			url: '/geographical-history',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/geographical-history/_template.html',
			data: {
				title: 'University Profile: Geographical History',
				rawTitle: 'Geographical History'
			}
		};

		$stateProvider
			.state(state);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.history',
			url: '/history',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/history/_template.html',
			data: {
				title: 'University Profile: History',
				rawTitle: 'History'
			}
		};

		$stateProvider
			.state(state);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.hymn',
			url: '/hymn',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/hymn/_template.html',
			data: {
				title: 'University Profile: Hymn',
				rawTitle: 'Hymn'
			}
		};

		$stateProvider
			.state(state);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.linkages-networks',
			url: '/linkages-networks',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/linkages-networks/_template.html',
			data: {
				title: 'University Profile: Linkages and Networks',
				rawTitle: 'Linkages and Networks'
			}
		};

		$stateProvider
			.state(state);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.memberships',
			url: '/memberships',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/memberships/_template.html',
			data: {
				title: 'University Profile: Memberships',
				rawTitle: 'Memberships'
			}
		};

		$stateProvider
			.state(state);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.milestone-events',
			url: '/milestone-events',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/milestone-events/_template.html',
			data: {
				title: 'University Profile: Milestone Events',
				rawTitle: 'Milestone Events'
			},
			resolve: {
				milestones: ['MilestoneSrvc', function(MilestoneSrvc) {
					return MilestoneSrvc.getEraCollection();
				}]
			}
		};

		$stateProvider
			.state(state);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.mission-vision',
			url: '',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/mission-vision/_template.html',
			data: {
				title: 'University Profile: Mission and Vision',
				rawTitle: 'Mission and Vision'
			}
		};

		$stateProvider
			.state(state);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.philosophy',
			url: '/philosophy',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/philosophy/_template.html',
			data: {
				title: 'University Profile: Philosophy',
				rawTitle: 'Philosophy'
			}
		};

		$stateProvider
			.state(state);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.seal-and-colors',
			url: '/seal-and-colors',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/seal-and-colors/_template.html',
			data: {
				title: 'University Profile: Sean and Colors',
				rawTitle: 'Seal and Colors'
			}
		};

		$stateProvider
			.state(state);
	}
]);
var app = require("../../../../app");

app.config([
	'$stateProvider',
	function($stateProvider) {
		var state = {
			name: 'main.university-profile.university-charter',
			url: '/university-charter',
			templateUrl: '/assets/app/views/_main/children/university-profile/children/university-charter/_template.html',
			data: {
				title: 'University Profile: University Charter',
				rawTitle: 'University Charter'
			}
		};

		$stateProvider
			.state(state);
	}
]);