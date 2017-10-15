var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// PostCSS
gulp.task('gulp-postcss', function() {
    var plugins = [
        autoprefixer({ browsers: ['last 3 versions'] })
    ];
    return gulp.src('src/sass/**/*.scss')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist/css'));
});

// Browser Sync for live reload
gulp.task('browserSync', function() {
    //watch files
    var files = [
    'src/sass/**/*.scss',
    './*.php'
    ];
 
    //initialize browsersync
    browserSync.init(files, {
    //browsersync with a php server
    proxy: "localhost/your-site/",
    notify: false
    });
});


// Watch task
gulp.task('default', ['sass', 'browserSync'], function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);

    // Reloads the browser whenever HTML or JS files change
    gulp.watch('./*.php', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);
    gulp.watch('src/sass/**/*.scss', browserSync.reload);
});


// **** BUILD TASKS **** //

// Minify JS
gulp.task('useref', function() {
    return gulp.src('./*.php')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist/js/'))
});

// Minify CSS
gulp.task('minify-css', function() {
    return gulp.src('src/sass/style.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css'));
});

// Minify Images
gulp.task('images', function() {
    return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
        // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
});

// Move fonts to dist folder
gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
})

// **** END BUILD TASKS **** //