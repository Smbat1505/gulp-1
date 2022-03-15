import fileinclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import GulpPug from 'gulp-pug';

export const html = () => {
  return (
    app.gulp
      .src(app.path.src.html)
      .pipe(
        app.plugins.gulpPlumber(
          app.plugins.notify.onError({
            title: 'HTML',
            message: 'Error: <%= error.message %>',
          })
        )
      )
      .pipe(fileinclude()) // !  ПРИ ИСПОЛЬЗОВАНИЯ PUG ЗАКОМЕНТИРОВАТЬ
      // ! ДЛЯ ИСПОЛЬЗОВАНИЯ PUG
      // .pipe(
      //   GulpPug({
      //     //  ! Сжатие файла html
      //     pretty: true,
      //     // ! Показывать в терминале какой файл обработан
      //     verbose: true,
      //   })
      // )
      .pipe(app.plugins.replace(/@img\//g, 'img/'))
      .pipe(webpHtmlNosvg())
      .pipe(
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js'],
          },
          output: {
            file: 'gulp/version.json',
          },
        })
      )
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browserSync.stream())
  );
};
