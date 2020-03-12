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
// Если сторонних библиотек или SVG-спрайта нет, комментируем соответственно задачи 'styles:lib', 'scripts:lib' и 'svg:sprite'
$.gulp.task('default', $.gulp.series(
    $.gulp.parallel(
        // 'styles:lib',
        // 'scripts:lib',
        'scripts',
        'relocateStaticFiles',
        'svg:sprite',
        'svg'
    ),
    $.gulp.parallel('pug', 'styles'),
    $.gulp.parallel('watch', 'serve')
));