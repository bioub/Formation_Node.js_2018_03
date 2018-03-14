const fs = require('fs-extra');
const path = require('path');
const async = require('async');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(fileName, msg) {
  msg = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.appendFile(fileName, msg);
}

console.time('Logs DONE');
console.time('Thread Idle');

// Callback Hell / Pyramid of doom
/*
fs.stat(logDir, (err, stats) => {
  if (err && err.code !== 'ENOENT') {
    return console.log(err.message);
  }
  if (err) {
    return fs.mkdir(logDir, (err) => {
      if (err) {
        return console.log(err.message);
      }

      next();
    });
  }

  if (!stats.isDirectory()) {
    return fs.unlink(logDir, (err) => {
      if (err) {
        return console.log(err.message);
      }
      fs.mkdir(logDir, (err) => {
        if (err) {
          return console.log(err.message);
        }

        next();
      });
    });
  }

  next();
});
*/
fs.stat(logDir)
  .then((stats) => {
    if (!stats.isDirectory()) {
      return fs.unlink(logDir)
        .then(() => fs.mkdir(logDir));
    }
  })
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.mkdir(logDir);
    }
    throw err;
  })
  .then(() => log(logFile, 'Ligne 1'))
  .then(() => log(logFile, 'Ligne 2'))
  .then(() => log(logFile, 'Ligne 3'))
  .then(() => log(logFile, 'Ligne 4'))
  .then(() => log(logFile, 'Ligne 5'))
  .then(() => console.timeEnd('Logs DONE'))
  .catch((err) => {
    console.log(err.message);
  });

console.timeEnd('Thread Idle');
