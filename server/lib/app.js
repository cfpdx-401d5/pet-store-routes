const app = require('express')();
const morgan = require('morgan')('dev');
const cors = require('cors')();

const petStoreRouter = require('./routes/pet-store');
const petsRouter = require('./routes/pets');
const breedRouter = require('./routes/pet-breeds');

const errorHandler = require('./error-handler')();

app.use(morgan);

app.use(cors);

app.use('/pet-store', petStoreRouter);
app.use('/pets', petsRouter);
app.use('/breeds', breedRouter);

app.use(errorHandler);

module.exports = app;