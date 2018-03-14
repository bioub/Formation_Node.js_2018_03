const fs = require('fs');

const files = fs.readdirSync(__dirname);

files.filter((file) => file.endsWith('.test.js'))
    .forEach((file) => require(`./${file}`));
