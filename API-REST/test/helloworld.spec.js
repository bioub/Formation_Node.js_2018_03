const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
chai.should();

function hello(name) {
  return `Hello ${name} !`;
}

describe('hello function', () => {
  it('should return Hello Romain !', () => {
    assert.strictEqual(hello('Romain'), 'Hello Romain !');
    expect(hello('Romain')).to.be.equals('Hello Romain !');
    hello('Romain').should.be.equals('Hello Romain !');
  });
});
