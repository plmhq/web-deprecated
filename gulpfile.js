// Directory
var
	_public 		= './public/',

	_assets 		= _public + 'assets/',
	_css			= _assets + 'css/',
	_js				= _assets + 'js/',
	_vendor			= _assets + 'vendor/',
	_bimg			= _assets + 'img/',

	_src			= _public + 'src/',
	_client			= _src + 'client/',
	_sass			= _src + 'sass/',
	_img 			= _src + 'img/';
	


// Node modules
var 
	gulp 			= require('gulp'),
	sass 			= require('gulp-ruby-sass'),
	autoprefixer 	= require('gulp-autoprefixer'),
	minifycss 		= require('gulp-minify-css'),
	uglify 			= require('gulp-uglify'),
	imagemin 		= require('gulp-imagemin'),
	rename 			= require('gulp-rename'),
	concat 			= require('gulp-concat');

// Compile sass
gulp.task('compile-sass', function() {
	return gulp.src(_sass + 'default/main.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 11', 'ios 6', 'android 4'))
		.pipe(rename('main.css'))
		.pipe(gulp.dest(_css));
});

// Minify sass
gulp.task('minify-sass', function() {
	return gulp.src(_css + 'main.css')
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(_css));
});

// Bundle scripts
gulp.task('bundle-app', function() {
	return gulp.src([
			_client + 'app.js',
			_client + 'bootstrap.js',
			_client + 'components/**/*.js',
			_client + 'services/**/*.js',
			_client + 'directives/**/*.js',
			_client + 'utils/**/*.js'
		])
		.pipe(concat('build.js'))
		.pipe(gulp.dest(_js));
});

// Uglify scripts
gulp.task('uglify-app', function () {
	return gulp.src(_js + 'build.js')
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(_js));
});

// Minify images
gulp.task('minify-img', function() {
	return gulp.src(_img + '*.{png, gif, jpg, jpeg}')
		.pipe(imagemin())
		.pipe(gulp.dest(_bimg));
});

// Tasks
gulp.task('default', function() {
	gulp.run('compile-sass');
	gulp.run('bundle-app');
	gulp.run('minify-img');

	gulp.watch(_client + '**/*.js', ['bundle-app']);
	gulp.watch(_js + 'build.js', ['uglify-app']);

	gulp.watch(_sass + 'default/**/*.scss', ['compile-sass']);
	gulp.watch(_css + 'main.css', ['minify-sass']);

	gulp.watch(_img + 'images/**', ['minify-img']);
});