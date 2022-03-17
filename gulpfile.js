// Main modoon
import gulp from 'gulp';
// Import paths
import { path } from './gulp/config/path.js';
// Import of common plugins
import { plugins } from './gulp/config/plugins.js';

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Import tasks
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
// import { otfToTtf } from './gulp/tasks/fonts.js';
// import { ttfToWoff } from './gulp/tasks/fonts.js';
// import { fontsStyle } from './gulp/tasks/fonts.js';
import { svgSprive } from './gulp/tasks/svgSprive.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';

// Observer for changes in files
function watcher() {
  gulp.watch(path.watch.files, copy); //! ЧТОБЫ СРАЗУ ВЫГРУЗИТЬ НА СЕРВЕР ИЗМЕНИ copy НА gulp.series(copy, ftp)
  gulp.watch(path.watch.html, html); //! ЧТОБЫ СРАЗУ ВЫГРУЗИТЬ НА СЕРВЕР ИЗМЕНИ html НА gulp.series(html, ftp)
  gulp.watch(path.watch.scss, scss); //! ЧТОБЫ СРАЗУ ВЫГРУЗИТЬ НА СЕРВЕР ИЗМЕНИ scss НА gulp.series(scss, ftp)
  gulp.watch(path.watch.js, js); //! ЧТОБЫ СРАЗУ ВЫГРУЗИТЬ НА СЕРВЕР ИЗМЕНИ js НА gulp.series(js, ftp)
  gulp.watch(path.watch.images, images); //! ЧТОБЫ СРАЗУ ВЫГРУЗИТЬ НА СЕРВЕР ИЗМЕНИ images НА gulp.series(images, ftp)
}

export { svgSprive };

// Font-out processing
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, js, images)
);

// Building task scripts
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);
// export
export { dev };
export { build };
export { deployZIP };
export { deployFTP };
// Default script execution
gulp.task('default', dev);
