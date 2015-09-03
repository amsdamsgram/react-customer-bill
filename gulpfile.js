/**
 * Created by idams on 8/31/15.
 */

var gulp = require('gulp'),
    util = require('gulp-util'),
    browserify = require('browserify'),
    watchify = require('watchify')
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    buffer = require('vinyl-buffer'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    del = require('del');

var _ENTRY = 'js/app.jsx',
    _MAIN_JS = 'bundle.js',
    _MAIN_CSS = 'bundle.css',
    _MAIN_MIN_JS = 'bundle.min.js',
    _MAIN_MIN_CSS = 'bundle.min.css',
    _CSS_DEST = 'css/',
    _JS_DEST = 'js/',
    _CSS_FILES = [
        'css/*.css',
        '!'+_CSS_DEST+_MAIN_CSS,
        '!'+_CSS_DEST+_MAIN_MIN_CSS
    ];

function build(watch,prod){
    var b = browserify({
                cache: {},
                packageCache: {},
                fullPaths: true,
                entries: _ENTRY,
                extensions: ['.jsx'],
                debug: true
            })
            .transform(babelify);

    if( watch ) b = watchify(b);

    createBundle(b,prod);

    b.on('update',function(){
        createBundle(b)
    });
}

function createBundle(b,prod){

    var bundle = b.bundle();

    if( util.env.prod ){
        bundle = bundle.pipe(source(_MAIN_MIN_JS))
            .pipe(buffer())
            .pipe(uglify());
    }else{
        bundle = bundle.pipe(source(_MAIN_JS))
            .pipe(buffer())
            .pipe(sourcemaps.init())
            .pipe(sourcemaps.write('.'));
    }

    bundle.pipe(gulp.dest(_JS_DEST));
}

function buildCSS(){

    gulp.src(_CSS_FILES)
        .pipe(sourcemaps.init())
        .pipe(concat(_MAIN_CSS))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write())
        .pipe(util.env.prod ? minifyCSS() : util.noop())
        .pipe(util.env.prod ? rename(_MAIN_MIN_CSS) : util.noop())
        .pipe(gulp.dest(_CSS_DEST));
}

gulp.task('css',function(){
    buildCSS();
});

gulp.task('watch',function(){

    build(true);
    gulp.watch(_CSS_FILES,['css']);
});

gulp.task('build', function(){
    build();
});

gulp.task('clean', function(){

    var files = [_JS_DEST+_MAIN_JS,
                _JS_DEST+_MAIN_MIN_JS,
                _JS_DEST+_MAIN_JS+'.map',
                _CSS_DEST+_MAIN_CSS,
                _CSS_DEST+_MAIN_MIN_CSS];

    util.env.prod ? files.push('node_modules/') : '';

    del(files, function (err, paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });
});

gulp.task('default', ['build','css']);

// gulp --prod to build for production