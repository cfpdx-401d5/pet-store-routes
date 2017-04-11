const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const morgan = require('morgan');
const cors = require('cors');
const store = require('./routes/store-routes');
const pet = require('./routes/pet-routes');
const auth = require('./routes/auth-routes');
const ensureAuth = require('./auth/ensure-auth');

app.use(cors());
app.use(morgan('dev'));
app.use('/auth', auth);
app.use('/stores', ensureAuth, store);
app.use('/pets', ensureAuth, pet);
app.use(errorHandler);

module.exports = app;