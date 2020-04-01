module.exports = () => {

    // Сборка SVG-спрайта
    $.gulp.task('svg:sprite', () => {
        return $.gulp.src(`${$.paths.dev}/img/svg/*.svg`)
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gp.cheerio({
                run: function($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe($.gp.replace('&gt;', '>'))
            .pipe($.gp.svgSprite({
                mode: {
                    symbol: {
                        sprite: 'sprite.svg'
                    }
                }
            }))
            .pipe($.gulp.dest(`${$.paths.app}/img/svg`));
    });

    // Обработка SVG-файлов
    $.gulp.task('svg', () => {
        return $.gulp.src(`${$.paths.dev}/img/svg/*.svg`)
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gulp.dest(`${$.paths.app}/img/svg`));
    });
};