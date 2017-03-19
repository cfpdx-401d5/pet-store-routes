const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    pets: [{
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    }]
});

module.exports = mongoose.model('Store', schema);