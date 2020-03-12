module.exports = () => {
    $.gulp.task('pug', () => {
        return $.gulp.src([
                `${$.paths.dev}/pages/*.pug`
            ])
            .pipe($.gp.plumber())
            .pipe($.gp.pug({pretty: true}))
            .pipe($.gulp.dest(`${$.paths.app}`))
            .on('end', $.bs.reload);
    });
};