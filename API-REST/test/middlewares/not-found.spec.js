const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
chai.should();
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const notFound = require('../../src/middlewares/not-found');

describe('hello function', () => {

  it('should return Hello Romain !', () => {

    const req = {};
    const res = {
      json: sinon.spy(),
    };

    notFound(req, res);

    expect(res.statusCode).to.be.equals(404);
    expect(res.json).to.have.been.calledOnce;
    // Ecrire les assertions :
    // Vérifier le status code 404
    // Vérifier l'appel à json
    // et que le message d'erreur soit le bon
  });
});
