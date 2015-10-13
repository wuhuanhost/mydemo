var  gulp		=	require('gulp'),
	 gutil		=	require('gulp-util'),
	 jshint		=	require('gulp-jshint'),//js代码校验
	 uglify		=	require('gulp-uglify'),//js压缩
	 cssmin		=	require('gulp-minify-css'),//css压缩
	 concat		=	require('gulp-concat'),//文件合并
	 imagemin	=	require('gulp-imagemin'),//图片压缩
	 cache		=	require('gulp-cache'),
	 rename     =	require('gulp-rename'),//重命名
	 notify		=	require('gulp-notify'),//通知
	 clean		=	require('gulp-clean'),//清理文件
	 htmlmin	=	require('gulp-htmlmin'),//html压缩
	 obfuscate	=	require('gulp-obfuscate'),//代码混淆
	 sass		=	require('gulp-ruby-sass'),//编译sass
     coffeelint =	require('gulp-coffeelint'),//校验coffcescript
	 coffee		=	require('gulp-coffee');//编译coffcescript



//源码目录
var SOURCE="src/";
//输出目录
var DEST="dist/";


//HTML文件
gulp.task('html', function() {
   gulp.src(SOURCE+"/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(DEST))
	    .pipe(notify({message:'html task success'}))
});


//脚本文件
gulp.task('js', function () {
    gulp.src(SOURCE+'/js/*.js')
		//合并js
		.pipe(concat("app.js"))
		//输出未压缩版本
		.pipe(gulp.dest(DEST+"/js"))
		//压缩
		.pipe(uglify())
		//混淆
		.pipe(obfuscate())
		.pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(DEST+'/js/'))
		.pipe(notify({message:'js task success'}));
});


//样式
gulp.task('css', function () {
    gulp.src(SOURCE+'/css/*.css')
		//合并css
		.pipe(concat('style.css'))
		//输出未压缩的版本
		.pipe(gulp.dest(DEST+"/css"))
		//压缩
		.pipe(cssmin())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(DEST+'/css/'))
		.pipe(notify({message:"css tsak success"}));
});


//图片
gulp.task('image', function() { 
  return gulp.src(SOURCE+'/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(DEST+'/images'))
    .pipe(notify({ message: 'images task success' }));
});



//编译sass
gulp.task('sass', function() {
  return sass(SOURCE+'/sass/*.scss', { style: 'expanded' })
	.pipe(gulp.dest(SOURCE+'/css'))
	.pipe(notify({message:"sass  compile  success"}));
});



//校验coffeescript
gulp.task('validate_coffee', function () {
  gulp.src(SOURCE+"/coffeescript/*.coffee")
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
	.pipe(notify({message:"coffee validate scuuess"}));
});



//编译coffcescript
gulp.task('coffee', ['validate_coffee'], function() {
  gulp.src(SOURCE+"/coffeescript/*.coffee")
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest(SOURCE+"/js"))
	.pipe(notify({message:"coffee compile scuuess"}));;
});



// 清理
gulp.task('clean', function() { 
  return gulp.src([DEST+'/css', DEST+'/js', DEST+'/images'], {read: false})
    .pipe(clean())
	.pipe(notify({message:'clean  task  success!!!'}));
});
 


// 预设任务
gulp.task('default', ['clean','coffee','sass'], function() { 
    gulp.start('js', 'css', 'image','html');
});

 