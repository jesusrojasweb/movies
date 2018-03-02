const gulp = require('gulp'),
	pug = require('gulp-pug'),
	postcss = require('gulp-postcss'),
	  rucksack = require('rucksack-css'),
	  cssnext = require('postcss-cssnext'),
	  cssnested = require('postcss-nested'),
	  mixins = require('postcss-mixins'),
	  lost= require('lost'),
	  sourcemaps = require('gulp-sourcemaps')
	  atImport = require('postcss-import'),
	  csswring = require('csswring'),
	  mqpacker = require('css-mqpacker'),
	browserSync = require('browser-sync').create()

// Servidor de desarrollo
gulp.task('serve', () => {
	browserSync.init({
    server: './'
  });
 })
gulp.task('css', ()=>{

  const processor = [
    atImport(),
    mixins(),
    cssnested,
    lost(),
    rucksack(),
    cssnext({browsers: ['> 5%', 'ie 8']}),
    mqpacker(),
    csswring()
  ]
  return gulp.src('./postcss/estilos.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processor))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
})

// Tarea para vigilar los cambios
gulp.task('watch', ()=>{
	gulp.watch('./postcss/*.css', ['css'])
	gulp.watch('./jade/*.pug', ['pug'])
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./*.css').on('change', browserSync.reload)
	gulp.watch('./js/*.js').on('change', browserSync.reload)
})
gulp.task('pug', ()=>{
  gulp.src('./jade/*.pug')
  .pipe(pug({
    pretty: false
  }))
  .pipe(gulp.dest('./'))
})

gulp.task('default',['watch','serve'])