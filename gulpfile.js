const { src, dest, series, parallel, watch } = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')
const reload = browserSync.reload
const concat = require('gulp-concat')
// const prefix = require('gulp-autoprefixer');

// browser-sync task for starting the server.
const browserSyncReload = () => {
  //watch files
  var files = ['./sass/*.scss', './*.php']

  //initialize browsersync
  browserSync.init(files, {
    //browsersync with a php server - Change this to your directory name.
    proxy: 'http://aimeetacchi.local/',
    notify: true,
  })
}

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
const sassCompile = () => {
  return (
    src(['sass/**.scss'])
      .pipe(sass({ outputStyle: 'compressed' }))
      //     .pipe(prefix({
      //       browsers: ['last 99 versions'],
      //       cascade: false
      // })
      .pipe(concat('style.css'))
      .pipe(dest('./'))
      .pipe(reload({ stream: true }))
  )
}

// Watch SCSS
const watchFiles = () => {
  browserSyncReload()
  watch('sass/**/*.scss', sassCompile)
}

let build = series(parallel(sassCompile, browserSyncReload, watchFiles))

exports.sassCompile = sassCompile
exports.browserSyncReload = browserSyncReload
exports.build = build

exports.default = build