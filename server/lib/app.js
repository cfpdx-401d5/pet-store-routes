const app = require('express')();
const stores = require('./routes/stores');
const pets = require('./routes/pets');
const morgan = require('morgan')('dev');
const cors = require('cors')();

app.use(cors);
app.use(morgan);

app.use('/stores', stores);
app.use('/pets', pets);

module.exports = app;
