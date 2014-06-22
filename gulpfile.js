// Directory
var stylesheets = './public/sass/'
var assets = './public/assets/'
var build = './public/build/'

/**
 * Node modules
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserify = require('gulp-browserify');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var install = require('gulp-install');

// Install modules
gulp.task('install', function() {
	return gulp.src(['bower.json'])
		.pipe(install());
});

// Stylesheet task
gulp.task('styles', function() {
	return gulp.src(stylesheets + 'default/main.scss')
		.pipe(sass({ style: 'expanded' }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 11', 'ios 6', 'android 4'))
		.pipe(rename({ suffix: 'min' }))
		.pipe(minifycss())
		.pipe(gulp.dest(build + 'css'))
		.pipe(livereload())
		.pipe(notify({ message: 'Styles task complete.' }));
});

// Script task
gulp.task('scripts', function() {
	return gulp.src(assets + 'main.js', { read: false })
		.pipe(browserify({
			extensions: ['.js']
		}))
		//.pipe(uglify({ mangle: false }))
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest(build + 'js'))
		.pipe(livereload())
		.pipe(notify({ message: 'Script tasks complete. '}));
});

// Minify images
gulp.task('images', function() {
	gulp.src('assets' + 'img/*.{ png, gif, jpg, jpeg}')
		.pipe(imagemin())
		.pipe(gulp.dest(build + 'images'))
		.pipe(notify({ message: 'Images task complete. '}));
});

// Watch changes
gulp.task('watch', function() {
	var server = livereload();

	gulp.run('styles');
	gulp.run('scripts');
	gulp.run('images');

	gulp.watch(assets + 'sass/**/*.scss', ['styles']);
	gulp.watch(assets + 'app/**/*.js', ['scripts']);
	gulp.watch(assets + 'images/**', ['images']);
	gulp.watch('./app/views/**/*.php')
		.on('change', function(file) {
			sever.changed(file.path);
		});
});