const fs = require('fs');
const path = require('path');

const editorConfig = path.resolve(__dirname, '.editorconfig');

const rs = fs.createReadStream(editorConfig);
rs.pipe(process.stdout);
// cat .editorconfig | grep .js
