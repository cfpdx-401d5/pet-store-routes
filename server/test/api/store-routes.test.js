const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require('../../lib/app');
const request = chai.request(app);

describe('store routes', () => {
    let storeOne = {
        name: 'Plenty of Pets',
        location: 'Hollywood',
        pets: []
    };

    it('POST to /stores adds a new store', () => {
        return request.post('/stores')
            .send(storeOne)
            .then(res => {
                assert.isOk(res.body._id);
                storeOne._id = res.body._id;
                storeOne.__v = res.body.__v;
                assert.deepEqual(res.body, storeOne);
            });
    });

    it('GET to /stores returns a list of stores', () => {
        return request.get('/stores')
            .then(res => {
                assert.isArray(res.body);
            });
    });

    it('GET to /stores/:id returns one store', () => {
        return request.get(`/stores/${storeOne._id}`)
            .then(res => {
                assert.deepEqual(res.body, storeOne);
            });
    });
    
    it('GET to /stores/:id/pets returns a list of pets at the store', ()=> {
        return request.get(`/stores/${storeOne._id}/pets`)
            .then(res => {
                console.log('res.body: ', res.body);
                assert.isArray(res.body.pets);
            });
    });
});