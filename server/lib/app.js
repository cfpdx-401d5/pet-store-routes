const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
//app.use('/', );
app.use(errorHandler);

module.exports = app;