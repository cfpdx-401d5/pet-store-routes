const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Breed = require('./pet-breeds');

const schema = new Schema({
    petName: {
        type: String,
        required: true
    },
    petBreed: {
            type: Schema.Types.ObjectId,
            ref: 'Breed'
    },
    petAge: {
        type: Number,
        required: true
    },
    petDescription: {
        type: String,
        required: true
    }
})

const Pets = mongoose.model('Pets', schema);
module.exports = Pets;