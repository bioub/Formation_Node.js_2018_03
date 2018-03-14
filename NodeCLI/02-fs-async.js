const fs = require('fs');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(fileName, msg, cb) {
  msg = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFile(fileName, msg, cb);
}

console.time('Logs DONE');
console.time('Thread Idle');

// Callback Hell / Pyramid of doom
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

function next() {
  log(logFile, 'Ligne 1', (err) => {
    if (err) {
      return console.log(err.message);
    }
    log(logFile, 'Ligne 2', (err) => {
      if (err) {
        return console.log(err.message);
      }
      log(logFile, 'Ligne 3', (err) => {
        if (err) {
          return console.log(err.message);
        }
        log(logFile, 'Ligne 4', (err) => {
          if (err) {
            return console.log(err.message);
          }
          log(logFile, 'Ligne 5', (err) => {
            if (err) {
              return console.log(err.message);
            }
            console.timeEnd('Logs DONE');
          });
        });
      });
    });
  });
}

console.timeEnd('Thread Idle');
