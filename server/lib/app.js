const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const morgan = require('morgan');
const cors = require('cors');
const store = require('./routes/store-routes');
const pet = require('./routes/pet-routes');

app.use(cors());
app.use(morgan('dev'));
app.use('/stores', store);
app.use('/pets', pet);
app.use(errorHandler);

module.exports = app;