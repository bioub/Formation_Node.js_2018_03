const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
chai.should();

describe('hello function', () => {
  let prenoms;

  beforeEach(() => {
    prenoms = ['Romain', 'Jean'];
  });

  it('should return Hello Romain !', () => {
    const spy = sinon.spy();
    prenoms.forEach(spy);

    expect(spy.callCount).to.equals(2);
    expect(spy.getCall(0).args[0]).to.equals('Romain');
  });
});
