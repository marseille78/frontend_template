"use strict";

global.$ = {
    gulp:   require('gulp'),
    gp:     require('gulp-load-plugins')(),
    bs:     require('browser-sync').create(),
    sp:     require('gulp.spritesmith'),
    gcmq:   require('gulp-group-css-media-queries'),
    paths:   {
        tasks: require('./gulp/config/tasks.js'),
        dev: './dev',
        app: './app'
    }
};

$.paths.tasks.forEach(taskPath => {
    require(taskPath)();
});

// Default
// Необходимую задачу включаем в 1-м $.gulp.parallel
$.gulp.task('default', $.gulp.series(
    // $.gulp.parallel(
        // 'styles:lib',
        // 'scripts:lib',
        // 'scripts',
    // ),
    $.gulp.parallel('pug', 'styles'),
    $.gulp.parallel('watch', 'serve')
));