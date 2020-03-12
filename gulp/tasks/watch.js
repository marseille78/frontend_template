module.exports = () => {
    $.gulp.task('watch', () => {
        $.gulp.watch(`${$.paths.dev}/**/*.pug`, $.gulp.series('pug'));
        $.gulp.watch(`${$.paths.dev}/**/*.scss`, $.gulp.series('styles'));
        $.gulp.watch(`${$.paths.dev}/**/*.js`, $.gulp.series('scripts'));
    });
};