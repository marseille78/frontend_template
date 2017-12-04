'use strict';

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    prefix = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create(),
    spritesmith = require('gulp.spritesmith');

// var useref = require('gulp-useref'),
var gulpif = require('gulp-if'),
    cssmin = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    rimraf = require('rimraf'),
    notify = require('gulp-notify'),
    ftp = require('vinyl-ftp');

var paths = {
    blocks: 'dev/blocks/',
    devDir: 'app/',
    libs: 'libs/',
    outputDir: 'build/'
};

var libsCSS = [];

var libsJS = [];

/*******************************************
    Developer tasks
*******************************************/

// PUG compile
gulp.task('pug', function() {
    return gulp.src([
            paths.blocks + '*.pug',
            '!' + paths.blocks + 'tpl_example.pug',
            '!' + paths.blocks + 'typography.pug'
        ])
        .pipe(plumber())
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(paths.devDir))
        .pipe(browserSync.stream())
});

// SASS compile
gulp.task('sass', function() {
    return gulp.src(paths.blocks + '*.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 10 versions'],
            cascade: true
        }))
        .pipe(gulp.dest(paths.devDir + 'css/'))
        .pipe(browserSync.stream());
});

// JS compile
gulp.task('scripts', function() {
    return gulp.src([
            paths.blocks + '**/*.js',
            '!' + paths.blocks + '_assets/**/*.js'
        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.devDir + 'js/'))
        .pipe(browserSync.stream());
});

// Concatination CSS-files from libraries
gulp.task('concatLibCSS', function() {
    return gulp.src(libsCSS)
        .pipe(plumber())
        .pipe(concat('lib.min.css'))
        .pipe(prefix({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(cssmin({compatibility: 'ie8'}))
        .pipe(gulp.dest(paths.devDir + 'css/'));
});

// Concatination JS-files from libraries
gulp.task('concatLibJS', function() {
    return gulp.src(libsJS)
        .pipe(plumber())
        .pipe(concat('lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.devDir + 'js/'));
});

// WATCH
gulp.task('watch', function() {
    gulp.watch(paths.blocks + '**/*.pug', ['pug']);
    gulp.watch(paths.blocks + '**/*.scss', ['sass']);
    gulp.watch(paths.blocks + '**/*.js', ['scripts']);
});

// SERVER
gulp.task('browser-sync', function() {
    browserSync.init({
        port: 3000,
        server: {
            baseDir: paths.devDir
        }
    });
});

// SPRITES
gulp.task('sprite', function() {
    var spriteData = gulp.src(paths.devDir + 'img/icons/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprite.scss'
        }));
    spriteData.img.pipe(gulp.dest(paths.devDir + 'img/')); // Path to save image
    spriteData.css.pipe(gulp.dest(paths.blocks + '_base/')); // Path to save styles
});



/*********************************************
    Production tasks
*********************************************/

// CLEAN
gulp.task('clean', function(cb) {
    rimraf(paths.outputDir, cb);
});

// CSS + JS
// gulp.task('buildCSS', ['clean'], function() {
//     return gulp.src(paths.devDir + '*.html')
//         .pipe(useref())
//         .pipe(gulpif('*.js', uglify()))
//         .pipe(gulpif('*.css', cssmin()))
//         .pipe(gulp.dest(paths.outputDir));
// });

// COPY IMAGES TO outputDir
gulp.task('imgBuild', ['clean'], function() {
    return gulp.src(paths.devDir + 'img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest(paths.outputDir + 'img/'));
});

// COPY FONTS TO outputDir
gulp.task('fontsBuild', ['clean'], function() {
    return gulp.src(paths.devDir + 'fonts/*')
        .pipe(gulp.dest(paths.outputDir + 'fonts/'));
});

// FTP
gulp.task('send', function() {
    var conn = ftp.create({
        host: '77.120.110.166',
        user: 'marseille78',
        password: '1110',
        parallel: 5
    });

    // List all files you FTP in the glob variables
    var globs = [
        'build/**/*',
        '!node_modules/**' // if you wish to exclude directories, start the item with an !
    ];

    return gulp.src(globs, { base: '.', buffer: false })
        .pipe(conn.newer('/')) // only upload newer files
        .pipe(conn.dest('/'))
        .pipe(notify('Dev site updated!'));
});



// DEFAULT
gulp.task('default', ['concatLibCSS', 'concatLibJS', 'browser-sync', 'watch', 'pug', 'sass', 'scripts']);

// PRODUCTION
gulp.task('prod', ['build', 'imgBuild', 'fontsBuild']);