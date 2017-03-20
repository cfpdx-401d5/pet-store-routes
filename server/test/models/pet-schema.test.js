const Pet = require('../../lib/model/pet-schema');
const testInvalid = require('./test-invalid')(Pet);

describe('pet schema', () => {
    it('requires name', () => {
        return testInvalid({category: 'dog', gender: 'male', description: 'playful Beagle puppy', sold: false});
    });
    it('requires category', () => {
        return testInvalid({name: 'Duke', gender: 'male', description: 'playful Beagle puppy', sold: false});
    });
    it('requires gender', () => {
        return testInvalid({name: 'Duke', category: 'dog', description: 'playful Beagle puppy', sold: false});
    });
    it('requires description', () => {
        return testInvalid({name:'Duke', category: 'dog', gender: 'male', sold: false});
    });
    it('requires status', () => {
        return testInvalid({name: 'Duke', category: 'dog', gender: 'male', description: 'playful Beagle puppy'}); 
    });
});