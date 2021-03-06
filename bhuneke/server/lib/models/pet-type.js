const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    enum: ['dog', 'cat', 'bird', 'snake', 'horse'],
    required: true
  }
});

module.exports = mongoose.model('PetType', schema);
