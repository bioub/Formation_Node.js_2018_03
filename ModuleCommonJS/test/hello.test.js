const assert = require('assert');
const hello = require('../src/hello');

try {
    assert.strictEqual(hello('Romain'), 'Hello Romain !');
    console.log('hello.js OK');
}
catch (err) {
    console.error('hello.js KO');
    console.error(err.message);
    console.error(err.stack);
}