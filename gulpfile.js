// Directory
var stylesheets 	= './public/sass/',
	assets 			= './public/assets/',
	app 			= './public/app/',
	vendor 			= assets + 'vendor/';


// Node modules
var gulp 			= require('gulp'),
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
	return gulp.src(['./bower.json'])
		.pipe(install());
});

// Stylesheet task
gulp.task('styles', function() {
	return gulp.src(stylesheets + 'default/main.scss')
		.pipe(sass({ style: 'expanded' }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 11', 'ios 6', 'android 4'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest(assets + 'css'))
		.pipe(livereload())
		.pipe(notify({ message: 'Styles task complete.' }));
});

// Script task
gulp.task('scripts', function() {
	return gulp.src(app + 'bootstrap.js', { read: false })
		.pipe(browserify({
			extensions: ['.js'],
			insertGlobals : true,
        	debug : !gulp.env.production
		}))
		//.pipe(uglify({ mangle: false }))
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest(assets + 'js'))
		.pipe(livereload())
		.pipe(notify({ message: 'Script tasks complete. '}));
});

// Minify images
gulp.task('images', function() {
	return gulp.src(assets + 'images/*.{ png, gif, jpg, jpeg}')
		.pipe(imagemin())
		.pipe(gulp.dest(assets + 'images'))
		.pipe(notify({ message: 'Images task complete. '}));
});

// Watch changes
gulp.task('watch', function() {
	var server = livereload();

	gulp.run('styles');
	gulp.run('scripts');
	gulp.run('images');

	gulp.watch(stylesheets + 'default/**/*.scss', ['styles']);
	gulp.watch(app + '**/*.js', ['scripts']);
	gulp.watch(assets + 'images/**', ['images']);
	gulp.watch('./app/views/**/*.php')
		.on('change', function(file) {
			server.changed(file.path);
		});
});