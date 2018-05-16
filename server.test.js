// JavaScript test code
// test modules
const request = require('supertest');
const expect = require('expect');

console.log('instantiate the application ...')

// instantiate the app
var app = require('./server').app;

//mocha - describe to prettify output
describe('Server', () => {

    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect((res) => {
                    //console.log(res.text);
                    expect(res.text).toContain('Hello Thames Valley not Silicon Valley (Pat. Pending) !');
                })
                .end(done);
        });
    });
});