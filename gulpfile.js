var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css')
var minifyHTML = require('gulp-minify-html')
var uglify = require('gulp-uglify')
var clean = require('gulp-clean')
var gls = require('gulp-live-server')

gulp.task('css',function(){
  var cssFiles = ["src/*.css",
      "bower_components/bootstrap/dist/css/bootstrap.css",
      "bower_components/font-awesome/css/font-awesome.css"]
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
  var jsFiles = ["src/*.js",
      "bower_components/angular/angular.js",
      "bower_components/angular-ui-router/release/angular-ui-router.js"]
  return gulp.src(jsFiles).pipe(gulp.dest('test/'))
                          .pipe(uglify({ mangle: false }))
                          .pipe(gulp.dest('dist/'))

})

gulp.task('fontawesome',function(){
  return gulp.src('bower_components/font-awesome/fonts/*')
             .pipe(gulp.dest('test/fonts/'))
             .pipe(gulp.dest('dist/fonts/'))
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
  gulp.watch('src/*.css',['css'])
  gulp.watch('src/*.js',['js'])
  gulp.watch('src/*.html',['html'])
  gulp.watch(['test/*'],function(file){
    server.notify.apply(server,[file])
  })
})

gulp.task('default',['html','css','js','fontawesome'])
