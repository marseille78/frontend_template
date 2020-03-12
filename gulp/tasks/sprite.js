module.exports = () => {
    $.gulp.task('sprite', function() {
        var spriteData = $.gulp.src(`${$.paths.dev}/img/icons/*.png`)
            .pipe($.sp({
                imgName: 'sprite.png',
                cssName: 'sprite.scss',
                padding: 1
            }));
        spriteData.img.pipe($.gulp.dest(`${$.paths.app}/img`)); // Path to save image
        spriteData.css.pipe($.gulp.dest(`${$.paths.dev}/base`)); // Path to save styles
    });

    $.gulp.task('relocateStaticFiles', function() {
        return $.gulp.src([
                `${$.paths.dev}/img/**/*.*`,
                `${$.paths.dev}/fonts/**/*.*`,
                `!${$.paths.dev}/img/icons/*.*`,
                `!${$.paths.dev}/img/svg/**/*.svg`
            ])
            .pipe($.gulp.dest(`${$.paths.app}/img`));
    });
};