const Store = require('../../lib/model/store-schema');
const testInvalid = require('./test-invalid')(Store);

describe('store schema', () => {
    it('requires name', () => {
        return testInvalid({location: 'Hollywood', pets: []});
    });
    it('requires location', () => {
        return testInvalid({name: 'Plenty of Puppies', pets: []});
    });
});