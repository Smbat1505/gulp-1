// Main modoon
import gulp from 'gulp';
// Import paths
import { path } from './gulp/config/path.js';
// Import of common plugins
import { plugins } from './gulp/config/plugins.js';

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Import tasks
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';

// Observer for changes in files
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

// Building task scripts
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Default script execution
gulp.task('default', dev);
