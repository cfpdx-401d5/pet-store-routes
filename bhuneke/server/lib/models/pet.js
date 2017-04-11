const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  store: {
    type: Schema.Types.ObjectId,
    ref: 'Store'
  },
  name: {
    type: String,
    required: true
  },
  type: String
});

module.exports = mongoose.model('Pet', schema);
