module.exports = () => {
    $.gulp.task('serve', () => {
        $.bs.init({
            port: 3000,
            server: {
                baseDir: $.paths.app
            }
        });
    });
};