const assert = require('assert');
// const { sum } = require('../src/my-maths');
const myMaths = require('../src/my-maths');

try {
    // assert.strictEqual(sum(1, 2), 3);
    assert.strictEqual(myMaths.sum(1, 2), 3);
    console.log('my-maths.js OK');
}
catch (err) {
    console.error('my-maths.js KO');
    console.error(err.message);
    console.error(err.stack);
}