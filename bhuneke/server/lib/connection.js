const mongoose = require('mongoose');
mongoose.Promise = Promise;

const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/pet-stores';

module.exports = mongoose.connect(dbUri);

mongoose.connection.on('connected', () => {
  console.log('connected to mongo');
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose default connection error:' + err);
});
