const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;
const app = require('../src/app');

describe('GET /api/contacts', () => {

  it('should return status 200', (done) => {

    chai.request(app)
      .get('/api/contacts')
      .end(function(err, res) {
        expect(res).to.have.status(404);
        done();
      });

  });
});
