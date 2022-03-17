import replace from 'gulp-replace'; // ! Search and replacement
import gulpPlumber from 'gulp-plumber'; // ! Error processing
import notify from 'gulp-notify'; // ! Message (Tip)
import browserSync from 'browser-sync'; // ! Local server
import newer from 'gulp-newer';
import ifPlugin from 'gulp-if';

// Export object
export const plugins = {
  replace: replace,
  gulpPlumber: gulpPlumber,
  notify: notify,
  browserSync: browserSync,
  newer: newer,
  if: ifPlugin,
};
