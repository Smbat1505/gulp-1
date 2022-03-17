// Obtaining a project folder name
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // ! You can also use rootfolder
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    scss: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{ipg,ipeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`, // !  ПРИ ИСПОЛЬЗОВАНИЯ PUG ЗАКОМЕНТИРОВАТЬ
    // html: `${srcFolder}/*.pug`, // !  ПРИ ИСПОЛЬЗОВАНИЯ HTML ЗАКОМЕНТИРОВАТЬ
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/**/*.scss`,
    html: `${srcFolder}/**/*.html`, // !  ПРИ ИСПОЛЬЗОВАНИЯ PUG ЗАКОМЕНТИРОВАТЬ
    // html: `${srcFolder}/**/*.pug`, // !  ПРИ ИСПОЛЬЗОВАНИЯ HTML ЗАКОМЕНТИРОВАТЬ
    images: `${srcFolder}/img/**/*.{ipg,ipeg,png,svg,gif,ico,webp}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `test`,
};
