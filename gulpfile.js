//npm install gulp -g (global环境)  
//npm install gulp --save-dev (项目环境)
//在你的项目根目录下创建gulpfile.js，代码如下：
//在项目中install需要的gulp插件，一般只压缩的话需要  
//npm install gulp-htmlmin gulp-imagemin imagemin-pngcrush gulp-minify-css gulp-jshint gulp-uglify gulp-concat gulp-rename gulp-notify --save-dev
//以下require需要的module

// 引入 gulp
var gulp = require('gulp');


// 引入组件
var minifycss = require('gulp-minify-css'),//css压缩
    concat = require('gulp-concat'),//文件合并
    rename = require('gulp-rename'),//文件更名
    notify = require('gulp-notify');//提示信息

//压缩CSS  
gulp.task('css', function() {
    return gulp.src('./css/!(*.min.css)') //压缩的文件
            .pipe(rename({ suffix: '.min' }))
            .pipe(minifycss())
            .pipe(gulp.dest('./css')); //输出文件夹
});

//在任务数组中放上面要执行的任务  
gulp.task('default', ['css']);

//用来监视文件的变化，当文件发生变化后，我们可以利用它来执行相应的任务，例如文件压缩等。
gulp.watch(['./css/!(*.min.css)'], ['css']);