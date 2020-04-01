module.exports = () => {
    
    // Раскомментируем, если используем
    const libCSS = [
        // 'node_modules/bootstrap/dist/css/bootstrap.min.css',
        // 'node_modules/slick-carousel/slick/slick.css',
        // 'node_modules/slick-carousel/slick/slick-theme.css',
        // 'node_modules/select2/dist/css/select2.min.css',
    ];

    // Загрузка сторонних библиотек
    $.gulp.task('styles:lib', () => {
        if (libCSS.length > 0) {
            return $.gulp.src(libCSS)
                .pipe($.gp.plumber())
                .pipe($.gp.less())
                .pipe($.gp.concat('libs.min.css'))
                .pipe($.gp.autoprefixer())
                .on("error", $.gp.notify.onError({
                    message: "Error: <%= error.message %>",
                    title: "Error running Less"
                }))
                .pipe($.gp.csso())
                .pipe($.gulp.dest(`${$.paths.app}/css`));
        }
        return true;
    }),

    // Сборка стилей из блоков
    $.gulp.task('styles', () => {
        return $.gulp.src(`${$.paths.dev}/main.less`)
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.plumber())
            .pipe($.gp.less())
            .pipe($.gp.autoprefixer())
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "Error running Sass"
            }))
            .pipe($.gcmq())
            .pipe($.gp.sourcemaps.write('.'))
            .pipe($.gulp.dest(`${$.paths.app}/css`))
            .pipe($.bs.stream());
    });
};