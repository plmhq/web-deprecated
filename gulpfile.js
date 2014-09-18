/** Directories */
var
	_public 		= './public/',

	_assets 		= _public + 'assets/',
	_css			= _assets + 'css/',
	_js				= _assets + 'js/',
	_bimg			= _assets + 'img/',

	_src			= _public + 'src/',
	_client			= _src + 'client/',
	_main			= _src + 'main/',
	_img 			= _src + 'img/',
	_vendor			= _src + 'vendor/';

var mime = '{png, gif, jpg, jpeg}';
	


/** Node modules*/
var 
	gulp 			= require('gulp'),
	sass 			= require('gulp-ruby-sass'),
	autoprefixer 	= require('gulp-autoprefixer'),
	minifycss 		= require('gulp-minify-css'),
	uglify 			= require('gulp-uglify'),
	imagemin 		= require('gulp-imagemin'),
	rename 			= require('gulp-rename'),
	concat 			= require('gulp-concat'),
	annotate		= require('gulp-ng-annotate');

/** Scripts */
gulp.task('bundle-main', function () {
	return gulp.src([
			_client + '**/*.js',
			_main + 'app.js',
			_main + 'common/**/*.js',
			_main + 'components/**/*.js',
			_main + 'bootstrap.js'
		])
		.pipe(concat('main-build.js'))
		.pipe(annotate())
		.pipe(gulp.dest(_js));
});
gulp.task('uglify-main', function () {
	return gulp.src(_js + 'main-libs.js')
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(_js));
});

/** Libraries */
gulp.task('bundle-main-libs', function () {
	return gulp.src([
			_vendor + 'jquery/dist/jquery.js',
			_vendor + 'lodash/dist/lodash.js',
			_vendor + 'bootstrap/dist/js/bootstrap.js',
			_vendor + 'slick-carousel/slick/slick.js',
			_vendor + 'angular/angular.js',
			_vendor + 'angular-ui-router/release/angular-ui-router.js',
			_vendor + 'angular-timer/dist/angular-timer.js',
			_vendor + 'angular-slick/dist/slick.js',
			_vendor + 'ngprogress-lite/ngprogress-lite.js',
			_vendor + 'restangular/dist/restangular.js'
		])
		.pipe(concat('main-libs.js'))
		.pipe(gulp.dest(_js))
});
gulp.task('uglify-main-libs', function () {
	return gulp.src(_js + 'main-libs.js')
	.pipe(uglify())
	.pipe(rename({ suffix: '.min'}))
	.pipe(gulp.dest(_js));
});

/** Sass tasks */
gulp.task('compile-main-sass', function () {
	return gulp.src(_main + 'sass/main.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 11', 'ios 6', 'android 4'))
		.pipe(rename('main.css'))
		.pipe(gulp.dest(_css));
});
gulp.task('minify-main-sass', function () {
	return gulp.src(_css + 'main.css')
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(_css));
});

/** Minify images */
gulp.task('minify-img', function () {
	return gulp.src(_img + '**/*.')
		.pipe(imagemin())
		.pipe(gulp.dest(_bimg));
});

// Tasks
gulp.task('default', function () {
	gulp.run('compile-main-sass');
	gulp.run('bundle-main');
	gulp.run('bundle-main-libs');
	gulp.run('compile-main-sass');
	gulp.run('minify-img');

	gulp.watch(_main + '**/*.js', ['bundle-main']);
	gulp.watch(_js + 'main-build.js', ['uglify-main']);
	gulp.watch(_js + 'main-libs.js', ['uglify-main-libs']);

	gulp.watch(_main + 'sass/**/*.scss', ['compile-main-sass']);
	gulp.watch(_css + 'main.css', ['minify-main-sass']);
	gulp.watch(_img + '**/*.' + mime, ['minify-img']);
});