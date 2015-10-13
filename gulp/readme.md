


### 全局安装

`npm install -g gulp`

### 安装gulp包

`npm install gulp --save-dev  `

### 常用插件

```
sass的编译                   	（gulp-ruby-sass）
自动添加css前缀              	（gulp-autoprefixer）
压缩css                      	（gulp-minify-css）
js代码校验                   	（gulp-jshint）
合并js文件                   	（gulp-concat）
压缩js代码                   	（gulp-uglify）
压缩图片                     	（gulp-imagemin）
自动刷新页面                 	（gulp-livereload）
图片缓存，只有图片替换了才压缩  （gulp-cache）
更改提醒                        （gulp-notify）
清除文件                    	（del）
html压缩                     	（gulp-htmlmin）
```

### -save和-save-dev可以省掉你手动修改package.json文件的步骤。

`npm install module-name -save 自动把模块和版本号添加到dependencies部分`
`npm install module-name -save-dev 自动把模块和版本号添加到devdependencies部分`