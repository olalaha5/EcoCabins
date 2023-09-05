import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.sass`,
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.pug`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
        js: `${srcFolder}/js/**/*.js`,
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.pug`,
        scss: `${srcFolder}/**/*.sass`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `` // папка на удалённом сервере
}