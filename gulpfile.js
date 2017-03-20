var gulp 			= require('gulp'), 					// Подключение Gulp
    pug 			= require('gulp-pug'),				// Для работы с html-препроцессором PUG
	sass 			= require('gulp-sass'), 			// для работы с SASS
	browserSync 	= require('browser-sync'), 			// Локальный сервер и live-reload
	concat 			= require('gulp-concat'), 			// Слияние файлов
	uglifyjs		= require('gulp-uglifyjs'), 		// Минификация JS-файлов
	del				= require('del'),					// Очистка директории
	cssnano			= require('gulp-cssnano'), 			// Минификация CSS-файлов
	imagemin		= require('gulp-imagemin'),			// Оптимизация изображений
	pngquant		= require('imagemin-pngquant'),		// Оптимизация изображений
	cache			= require('gulp-cache'),			// Кеширование при оптимизации изображений
	plumber 		= require("gulp-plumber"),
	notify 			= require("gulp-notify"),			// Уведомления
	autoprefixer 	= require('gulp-autoprefixer');		// Для автоматической установки префиксов



// Подключение скриптов библиотек
gulp.task('scripts', function() {
	return gulp.src([
			// Библиотеки
			'dev/libs/jquery/dist/jquery.min.js',
			'dev/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
		])
		.pipe(concat('libs.min.js'))
		.pipe(uglifyjs())
		.pipe(gulp.dest('dev/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});



// Подключение стилей библиотек
gulp.task('styles', function() {
	return gulp.src([
			// Стили библиотек
			'dev/libs/magnific-popup/dist/magnific-popup.css'
		])
		.pipe(concat('libs.min.css'))
		.pipe(cssnano())
		.pipe(gulp.dest('dev/css'));
});



// Работа с Pug
gulp.task('pug', function() {
    return gulp.src('dev/pug/pages/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .on("error", notify.onError(function(error) {
            return "Message to the notifier: " + error.message;
        }))
        .pipe(gulp.dest('dev'));
});



// Работа с SCSS
gulp.task('sass', function() {
	return gulp.src('dev/sass/**/*.scss')
		.pipe(sass())
		.pipe(autoprefixer(['last 2 version']))
		.pipe(gulp.dest('dev/css/'))
		.pipe(browserSync.reload({stream: true}));
});



// Локальный сервер с live-reload
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'dev'
		},
		notify: false
	})
});



// Очистка папки сборки
gulp.task('clean', function() {
	return del.sync('app');
});



// Оптимизация изображений
gulp.task('img', function() {
	return gulp.src(['dev/img/**/*', '!dev/img/sprite/*'])
		.pipe(cache(imagemin({
				interlaced: true,
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			})))
		.pipe(gulp.dest('app/img'));
});



// Прослушивание
gulp.task('watch', ['browser-sync', 'sass', 'pug', 'scripts', 'styles'], function() {
	gulp.watch('dev/sass/**/*.scss', ['sass']);
    gulp.watch('dev/pug/**/*.pug', ['pug']);
	gulp.watch('dev/**/*.html', browserSync.reload);
	gulp.watch(['dev/js/**/*.js', '!dev/js/libs.min.js', '!dev/static/js/jquery.js'], browserSync.reload);
});



// Сборка в продакшн
gulp.task('build', ['clean', 'img', 'sass', 'scripts', 'styles'], function() {
	var buildCss = gulp.src('dev/css/**/*.css')
		.pipe(gulp.dest('app/css'));

	var buildFonts = gulp.src('dev/fonts/**/*')
		.pipe(gulp.dest('app/fonts'));

	var buildJs = gulp.src('dev/js/**/*.js')
		.pipe(gulp.dest('app/js'));

	var buildHtml = gulp.src('dev/*.html')
		.pipe(gulp.dest('app'));

    var buildImg = gulp.src('dev/img/sprite/sprite.png')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('app/img/sprite/'));
});



// Очистка кеша
gulp.task('clearCache', function() {
	return cache.clearAll();
});



// Дефолтный таск
gulp.task('default', ['watch']);

/*
Вопросы
-------------------------
1. Сборка спрайтов *.png
*/

/*
Плагины
----------
1. Animate.css 					// https://daneden.github.io/animate.css/ (CSS-анимация)
2. bxSlider 					// http://bxslider.com/ (Слайдер)
3. Magnific Popup 				// http://dimsemenov.com/plugins/magnific-popup/ (Попап)
4. Masked input plugin 			// http://digitalbush.com/projects/masked-input-plugin/ (Маска для ввода в форму)
5. Normalize.css 				// https://necolas.github.io/normalize.css/ (Сброс стилей)
6. slick 						// http://kenwheeler.github.io/slick/ (Карусель)
7. jQuery Validation Plugin 	// https://jqueryvalidation.org/ (Валидация форм)
*/