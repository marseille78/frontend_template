module.exports = () => {

    // Если что-то из этого используем - раскомментируем
    let libJS = [
        // 'node_modules/jquery/dist/jquery.min.js',
        // 'node_modules/slick-carousel/slick/slick.js',
        // 'node_modules/select2/dist/js/select2.min.js'
    ];

    // Загрузка сторонних библиотек
    $.gulp.task('scripts:lib', () => {
        if (libJS.length > 0) {
            return $.gulp.src(libJS)
                .pipe($.gp.concat('libs.min.js'))
                .pipe($.gulp.dest(`${$.paths.app}/js`))
                .pipe($.bs.stream());
        }
        return true;
    });

    // Сборка скриптов из блоков
    $.gulp.task('scripts', () => {
        return $.gulp.src([
            `${$.paths.dev}/main.js`,
            `${$.paths.dev}/themes/**/*.js`,
            `${$.paths.dev}/layout/**/*.js`,
                `${$.paths.dev}/components/**/*.js`,
            ])
            .pipe($.gp.concat('main.js'))
            .pipe($.gulp.dest(`${$.paths.app}/js`))
            .pipe($.bs.stream());
    });
};