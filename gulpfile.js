const { src, dest, series, watch} = require('gulp');

const sass = require('gulp-sass')( require('sass') );
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

// TASKS

const compileSCSS = done => {
  
  src('./src/scss/**/*.scss')
    .pipe( sourcemaps.init() )
    .pipe( sass( { outputStyle: 'expanded' } ) )
    .pipe( postcss([ autoprefixer(), cssnano() ]) )
    .pipe( sourcemaps.write('.') )
    .pipe( dest('./build/css') )

  done();

}

const attentionToChange = () => {
  watch('./src/scss/**/*.scss', compileSCSS );
}

const images = () => {
  return src('./src/assets/img/**/*')
         .pipe( imagemin({ optimizationLevel: 3 }) )
         .pipe( dest('./build/assets/img') )
}

const imagesWebp = () => {
  return src('./src/assets/img/**/*.{jpg,jpeg,png}')
         .pipe( webp({ quality: 50 }) )
         .pipe( dest('./build/assets/img') )
}

const imagesAvif = () => {
  return src('./src/assets/img/**/*.{jpg,jpeg,png}')
         .pipe( avif({ quality: 50 }) )
         .pipe( dest('./build/assets/img') )
}

exports.compileSCSS = compileSCSS;
exports.attentionToChange = attentionToChange;
exports.images = images;
exports.imagesWebp = imagesWebp;
exports.imagesAvif = imagesAvif;

exports.default = series( compileSCSS, attentionToChange);