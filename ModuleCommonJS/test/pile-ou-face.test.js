const assert = require('assert');
const pileOuFace = require('../src/pile-ou-face');

const backupRandom = Math.random;
try {
    Math.random = () => 0.75;
    assert.strictEqual(pileOuFace(), 'pile');
    Math.random = () => 0.25;
    assert.strictEqual(pileOuFace(), 'face');
    console.log('pile-ou-face.js OK');
}
catch (err) {
    console.error('pile-ou-face.js KO');
    console.error(err.message);
    console.error(err.stack);
}
finally {
    Math.random = backupRandom;
}