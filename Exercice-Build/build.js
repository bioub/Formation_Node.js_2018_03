const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const md5 = require('md5');
const UglifyJS = require('uglify-es');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function createDist() {
  await fs.remove(distPath);
  await fs.mkdir(distPath);
  console.log('dist dir (re)created');
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  const contentJsMinified = UglifyJS.minify(
    buffers[0].toString() + buffers[1].toString()
  ).code;

  await fs.writeFile(appJsDistPath, contentJsMinified);
  console.log('JS built');
}

async function buildHtml() {
  const buffer = await fs.readFile(indexHtmlPath);
  let content = buffer.toString();

  content = content.replace(
    /<script src="\.\/js\/horloge\.js">[\s\S]+<\/script>/mg,
    '<script src="./app.js"></script>'
  );

  await fs.writeFile(indexHtmlDistPath, content);
  console.log('HTML built');
}

async function build() {
  await createDist();
  await Promise.all([
    buildJs(),
    buildHtml(),
  ]);
  console.log('Build done');
}

build()
  .catch((err) => console.error(err));

