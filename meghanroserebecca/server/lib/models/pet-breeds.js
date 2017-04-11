const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    breedName: {
        type: String,
        required: true
    },
    requiresSpecialCare: {
        type: Boolean
    },
    goodWithChildren: {
        type: Boolean
    }
})

const Breed = mongoose.model('Breed', schema);
module.exports = Breed;