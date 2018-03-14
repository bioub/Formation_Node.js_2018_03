const fs = require('fs');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(fileName, msg) {
  msg = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFileSync(fileName, msg);
}

console.time('Logs DONE');
console.time('Thread Idle');
try {
  try {
    const stats = fs.statSync(logDir);

    if (!stats.isDirectory()) {
      fs.unlinkSync(logDir);
      fs.mkdirSync(logDir);
    }
  }
  catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
    fs.mkdirSync(logDir);
  }

  log(logFile, 'Ligne 1');
  log(logFile, 'Ligne 2');
  log(logFile, 'Ligne 3');
  log(logFile, 'Ligne 4');
  log(logFile, 'Ligne 5');
  console.timeEnd('Logs DONE');
}
catch (err) {
  console.log(err.message);
}

console.timeEnd('Thread Idle');
