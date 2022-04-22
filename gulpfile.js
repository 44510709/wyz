//gulp 4.0版本
const gulp = require('gulp');
//sass 转 css
const sass2 = require('gulp-sass')(require('sass'))
//css代码压缩
const minifyCss = require('gulp-minify-css');


// 编译sass


gulp.task('sass', async function (cb) {
  return gulp.src('components/css/**.scss')
    .pipe(sass2())
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'))
  cb()
})


