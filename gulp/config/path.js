// Obtaining a project folder name
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // ! You can also use rootfolder
const srcFolder = `./src`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    html: `${srcFolder}/*.html`, // !  ПРИ ИСПОЛЬЗОВАНИЯ PUG ЗАКОМЕНТИРОВАТЬ
    // html: `${srcFolder}/*.pug`, // !  ПРИ ИСПОЛЬЗОВАНИЯ HTML ЗАКОМЕНТИРОВАТЬ
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`, // !  ПРИ ИСПОЛЬЗОВАНИЯ PUG ЗАКОМЕНТИРОВАТЬ
    // html: `${srcFolder}/**/*.pug`, // !  ПРИ ИСПОЛЬЗОВАНИЯ HTML ЗАКОМЕНТИРОВАТЬ
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
