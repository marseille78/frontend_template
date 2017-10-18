"use strict";

/*********************************************
 * 		Variables
 *********************************************/

var gulp = require('gulp'), // сам gulp
    concatCSS = require('gulp-concat-css'), // объединение CSS-файлов
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    uncss = require('gulp-uncss'),
    pug = require('gulp-pug'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
	spritesmith = require('gulp.spritesmith');

// var useref = require('gulp-useref'),
// 	gulpif = require('gulp-if');

var clean = require('gulp-clean'),
    sftp = require('gulp-sftp');

var paths = {
    dirApp: 'app/',
    dirLib: 'app/libs/',
    appCSS: 'app/css',
    appJS: 'app/js',
    dirBlocks: 'dev/blocks/',
    dirBuild: 'build/'
};

var libsCSS = [];

var libsJS = [];



/**********************************************
 * 		Development
 *********************************************/

// HTML
gulp.task('html', function() {
    return gulp.src([paths.dirBlocks + '*.pug',
        '!' + paths.dirBlocks + 'template.pug',
        '!' + paths.dirBlocks + 'tpl_example.pug',
        '!' + paths.dirBlocks + 'tpl_1_col.pug',
        '!' + paths.dirBlocks + 'tpl_banner_adaptive.pug'])
        .pipe(plumber())
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(paths.dirApp))
        .pipe(connect.reload());
});

// CSS
gulp.task('css', function() {
    return gulp.src(paths.dirBlocks + '**/*.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.appCSS))
        .pipe(connect.reload({stream: true}));
});

// JS
gulp.task('js', function() {
    return gulp.src(paths.dirBlocks + '**/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.appJS))
        .pipe(connect.reload());
});

// Concatination CSS-files from libraries
gulp.task('concatLibCSS', function() {
    return gulp.src(libsCSS)
        .pipe(plumber())
        .pipe(concatCSS('lib.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(paths.appCSS));
});

// Concatination JS-files from libraries
gulp.task('concatLibJS', function() {
    return gulp.src(libsJS)
        .pipe(plumber())
        .pipe(concat('lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.appJS));
});

// Create sprite
gulp.task('sprite', function() {
    var spriteData = gulp.src('dev/img/icons/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprite.scss'
        }));
    return spriteData.pipe(gulp.dest(paths.dirBlocks + '_base/'));
});

// Server connect
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        // port:3000,
        livereload: true
    });
});

// Watcher
gulp.task('watch', function() {
    gulp.watch(paths.dirBlocks + '**/*.pug', ['html']);
    gulp.watch(paths.dirBlocks + '**/*.scss', ['css']);
    gulp.watch(paths.dirBlocks + '**/*.js', ['js']);
});

// Default task
gulp.task('default', ['concatLibCSS', 'concatLibJS', 'connect', 'html', 'css', 'js', 'watch']);



/**********************************************
 * 		Build production
 *********************************************/

// gulp.task('buildHTML', function() {
// 	return gulp.src(paths.dirApp + '*.html')
// 		.pipe(gulpif('*.js', uglify()))
// 		.pipe(gulpif('*.css', cleanCSS()))
// 		.pipe(useref())
// 		.pipe(gulp.dest('build'));
// });

// gulp.task('clean', function() {
//     return gulp.src(paths.dirBuild, {read: false})
//         .pipe(clean());
// });
//
// gulp.task('build', ['clean'], function() {});
//
// gulp.task('sftp', function() {
//     return gulp.src(paths.dirBuild + '**/*')
//         .pipe(sftp({
//             host: '',
//             user: '',
//             pass: '',
//             remotePath: ''
//         }));
// });