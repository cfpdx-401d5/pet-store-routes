const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pets = require('./pets');
const Breed = require('./pet-breeds');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    petsByBreed: [{
        breedName: {
            type: Schema.Types.ObjectId,
            ref: 'Breed'
        }
    }],
    petsByName: [{
        petName: {
            type: Schema.Types.ObjectId,
            ref: 'Pets'
        }
    }]
})

const PetStore = mongoose.model('PetStore', schema);
module.exports = PetStore;