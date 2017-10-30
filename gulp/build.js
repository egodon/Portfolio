const gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDeploy', function(){
	browserSync.init({
		server: {
			baseDir: "dist"
		}
	});
});


gulp.task('deleteDistFolder', function(){
	return del("./dist");
});


gulp.task('optimizeImages',['deleteDistFolder'], function(){
	return gulp.src('./app/assets/images/*')
	.pipe(imagemin({
		progressive: true
	}))
	.pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('moveFavIcons',['deleteDistFolder'], function () {
	return gulp.src(['./*.png', './favicon.ico'])
	.pipe(gulp.dest('./dist/'));
});

gulp.task('moveParticleJSON',['deleteDistFolder'], function () {
	return gulp.src('./app/assets/particles.json')
	.pipe(gulp.dest('./dist/assets/'));
});


gulp.task('usemin', ['styles', 'scripts'], function(){
	return gulp.src('./app/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()}, function() {return uglify()}]
		}))
		.pipe(gulp.dest('./dist'));
});


gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'moveFavIcons','moveParticleJSON', 'usemin']);
