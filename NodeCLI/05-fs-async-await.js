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

(async () => {

  try {
    try {
      const stats = await fs.stat(logDir);

      if (!stats.isDirectory()) {
        await fs.unlink(logDir);
        await fs.mkdir(logDir);
      }
    }
    catch (err) {
      if (err.code !== 'ENOENT') {
        throw err;
      }
      await fs.mkdir(logDir);
    }

    await log(logFile, 'Ligne 1');
    await log(logFile, 'Ligne 2');
    await log(logFile, 'Ligne 3');
    await log(logFile, 'Ligne 4');
    await log(logFile, 'Ligne 5');
    console.timeEnd('Logs DONE');
  }
  catch (err) {
    console.log(err.message);
  }


})();

console.timeEnd('Thread Idle');
