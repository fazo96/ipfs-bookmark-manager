var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css')
var minifyHTML = require('gulp-minify-html')
var uglify = require('gulp-uglify')
var clean = require('gulp-clean')
var gls = require('gulp-live-server')

gulp.task('css',function(){
  cssFiles = ["src/*.css","bower_components/bootstrap/dist/css/bootstrap.css"]
  return gulp.src(cssFiles)
                        .pipe(gulp.dest('test/'))
                        .pipe(minifyCSS())
                        .pipe(gulp.dest('dist/'))
})

gulp.task('html',function(){
  return gulp.src('src/*.html')
                        .pipe(gulp.dest('test/'))
                        .pipe(minifyHTML({ quotes: true }))
                        .pipe(gulp.dest('dist/'))
})

gulp.task('js',function(){
  jsFiles = ["src/*.js",
      "bower_components/angular/angular.js",
      "bower_components/angular-ui-router/release/angular-ui-router.js"]
  return gulp.src(jsFiles).pipe(gulp.dest('test/'))
                          .pipe(uglify({ mangle: false }))
                          .pipe(gulp.dest('dist/'))

})

gulp.task('clean',function(){
  return gulp.src(['dist/*','test/*']).pipe(clean())
})

gulp.task('watch',function(){
  gulp.watch('src/*.css',['css'])
  gulp.watch('src/*.js',['js'])
  gulp.watch('src/*.html',['html'])
})

gulp.task('serve',function(){
  var server = gls.static('test')
  server.start()
  gulp.watch(['src/*.css','src/*.html','src/*.js'],function(file){
    server.notify.apply(server,[file])
  })
})

gulp.task('default',['html','css','js'])
