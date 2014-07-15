// Directory
var
	_assets 		= './public/assets/',
	_build			= './public/build/',
	_sass			= _assets + 'sass/',
	_css			= _build + 'css/',
	_app 			= _assets + 'app/',
	_js				= _build + 'js/',
	_vendor			= _assets + 'vendor/',
	_img 			= _assets + 'img/',
	_bimg			= _build + 'img/';


// Node modules
var 
	gulp 			= require('gulp'),
	sass 			= require('gulp-ruby-sass'),
	browserify 		= require('gulp-browserify'),
	autoprefixer 	= require('gulp-autoprefixer'),
	minifycss 		= require('gulp-minify-css'),
	uglify 			= require('gulp-uglify'),
	imagemin 		= require('gulp-imagemin'),
	rename 			= require('gulp-rename'),
	concat 			= require('gulp-concat'),
	notify 			= require('gulp-notify'),
	livereload 		= require('gulp-livereload'),
	install 		= require('gulp-install');

// Install modules
gulp.task('install', function() {
	return gulp.src(['./bower.json', './package.json'])
		.pipe(install())
		.pipe(notify({ message: 'Vendor files installed!' }));
});

// Stylesheet task
gulp.task('styles', function() {
	return gulp.src(_sass + 'default/main.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 11', 'ios 6', 'android 4'))
		// .pipe(minifycss())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest(_css))
		.pipe(livereload())
		.pipe(notify({ message: 'Styles tasks complete! ' }));
});

// Script task
gulp.task('scripts', function() {
	return gulp.src(_app + 'bootstrap.js', { read: false })
		.pipe(browserify({
			extensions: ['.js'],
			insertGlobals : true,
		}))
		//.pipe(uglify({ mangle: false }))
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest(_js))
		.pipe(livereload())
		.pipe(notify({ message: 'Script tasks complete! '}));
});

// Minify images
gulp.task('images', function() {
	return gulp.src(_img + '*.{png, gif, jpg, jpeg}')
		.pipe(imagemin())
		.pipe(gulp.dest(_bimg))
		.pipe(notify({ message: 'Images task complete. '}));
});

// Default task
gulp.task('default', function() {
	var server = livereload();

	gulp.run('styles');
	gulp.run('scripts');
	gulp.run('images');

	gulp.watch(_sass + 'default/**/*.scss', ['styles']);
	gulp.watch(_app + '**/*.js', ['scripts']);
	gulp.watch(_img + 'images/**', ['images']);
	gulp.watch('./app/views/**/*.php')
		.on('change', function(file) {
			server.changed(file.path);
		});
});