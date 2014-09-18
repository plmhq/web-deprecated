/** Directories */
var
	_public 		= './public/',

	_assets 		= _public + 'assets/',
	_css			= _assets + 'css/',
	_js				= _assets + 'js/',
	_vendor			= _assets + 'vendor/',
	_bimg			= _assets + 'img/',

	_src			= _public + 'src/',
	_client			= _src + 'client/',
	_main			= _src + 'main/',
	_sass			= _src + 'sass/',
	_img 			= _src + 'img/';
	


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

// Compile sass
gulp.task('compile-sass', function () {
	return gulp.src(_sass + 'default/main.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 11', 'ios 6', 'android 4'))
		.pipe(rename('main.css'))
		.pipe(gulp.dest(_css));
});

// Minify sass
gulp.task('minify-sass', function () {
	return gulp.src(_css + 'main.css')
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(_css));
});

// Bundle scripts
gulp.task('bundle-main', function () {
	return gulp.src([
			_client + 'bootstrap.js',
			_client + 'common/**/*.js',
			_main + 'app.js',
			_main + 'common/**/*.js',
			_main + 'components/**/*.js',
			_main + 'bootstrap.js'
		])
		.pipe(concat('main-build.js'))
		.pipe(annotate())
		.pipe(gulp.dest(_js));
});

// Uglify scripts
gulp.task('uglify-main', function () {
	return gulp.src(_js + 'main-build.js')
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(_js));
});

// Bundle libraries
gulp.task('bundle-main', function () {
	return gulp.src([
			_vendor + 'jquery/dist/jquery.js',
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

// Uglify libraries
gulp.task('uglify-main', function () {
	return gulp.src(_js + 'main-libs.js')
	.pipe(uglify())
	.pipe(rename({ suffix: '.min'}))
	.pipe(gulp.dest(_js));
});

// Minify images
gulp.task('minify-img', function () {
	return gulp.src(_img + '*.{png, gif, jpg, jpeg}')
		.pipe(imagemin())
		.pipe(gulp.dest(_bimg));
});

// Tasks
gulp.task('default', function () {
	gulp.run('compile-sass');
	gulp.run('bundle-main');
	gulp.run('minify-img');
	gulp.run('bundle-main');
	gulp.run('uglify-main');

	gulp.watch(_main + '**/*.js', ['bundle-main']);
	gulp.watch(_js + 'build.js', ['uglify-main']);

	gulp.watch(_sass + 'default/**/*.scss', ['compile-sass']);
	gulp.watch(_css + 'main.css', ['minify-sass']);

	gulp.watch(_img + 'images/**', ['minify-img']);
});