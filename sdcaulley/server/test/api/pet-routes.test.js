const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require('../../lib/app');
const request = chai.request(app);

describe('pet routes', () => {

    let petOne = {
        name: 'Duke',
        category: 'dog',
        gender: 'male',
        description: 'playful Beagle Puppy',
        sold: false
    };

    it('POST to /pets adds a new pet', () => {
        return request.post('/pets')
            .send(petOne)
            .then(res => {
                assert.isOk(res.body._id);
                petOne._id = res.body._id;
                petOne.__v = res.body.__v;
                assert.deepEqual(res.body, petOne);
            });
    });
    it('GET to /pets returns a list of all pets', () => {
        return request.get('/pets')
            .then(res => {
                assert.isArray(res.body);
            });
    });
    it('GET to /pets/:id returns one pet', () => {
        return request.get(`/pets/${petOne._id}`)
        .then(res => {
            assert.deepEqual(res.body, petOne);
        });
    });
});