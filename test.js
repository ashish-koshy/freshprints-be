let server = require('./src/server');

const assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

describe('ServerTests', function () {
    it('should validate availability', function(done) {
        chai
            .request(server)
            .post('/availability')
            .set('content-type', 'application/json')
            .send([
                {
                    "apparel_name": "Winter Socks",
                    "size": "large"
                },
            ])
            .end(function(error, response) {
                if (error) {
                    done(error);
                } else {
                    done();
                    assert.equal(JSON.stringify(response.body), JSON.stringify([
                        {
                          apparel_name: 'Winter Socks',
                          size: 'large',
                          unit_price: 300,
                          available_units: 5,
                          producer: 'Levis'
                        },
                        {
                          apparel_name: 'Winter Socks',
                          size: 'large',
                          unit_price: 200,
                          available_units: 6,
                          producer: 'Louis Philipe'
                        }
                      ]));
                }
            });
    });
});