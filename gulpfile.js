var gulp = require('gulp'),
	jade = require('gulp-jade'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
  spritesmith = require('gulp.spritesmith'),
  rename = require("gulp-rename"),
  autoprefixer = require('gulp-autoprefixer');

var paths = './app/jade/pages/*.jade';
var s = './app/sass/**/*.scss';
var YOUR_LOCALS = {};

// gulp.task('prefix', function () {
//   return gulp.src('./app/css/*.css')
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions'],
//       cascade: false
//     }))
//     .pipe(gulp.dest('./app/css/'));
// });

// Jade
gulp.task('jade', function(){
  gulp.src(paths)
  	.pipe(plumber())
    .pipe(jade({
    	locals: YOUR_LOCALS,
    	pretty: '\t'
    }))
    .pipe(gulp.dest('./app/'))
});

gulp.task('sass', function () {
  return gulp.src('./app/sass/main.scss')
  	.pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css/'));
});

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('./app/imgs/*.png') 
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss',
                imgPath : '../imgs/sprites/sprite.png',              
            }));
    spriteData.img.pipe(gulp.dest('./app/imgs/sprites/')); 
    spriteData.css
      .pipe(rename({extname: ".scss"}))
      .pipe(gulp.dest('./app/sass/_layout/')); 
});

// Watch
gulp.task('watch', function(){
 gulp.watch('./app/jade/**/*.jade',['jade']);
 gulp.watch(s,['sass']);
 // gulp.watch(s,['prefix']);
});

gulp.task('default', ['watch']);
