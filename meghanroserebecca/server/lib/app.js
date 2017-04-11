const app = require('express')();
const morgan = require('morgan')('dev');
const cors = require('cors')();

const petStoreRouter = require('./routes/pet-store');
const petsRouter = require('./routes/pets');
const breedRouter = require('./routes/pet-breeds');
const router = require('./routes/auth');

const ensureAuth = require('./auth/ensure-auth')();
const errorHandler = require('./error-handler')();

app.use(morgan);

app.use(cors);

app.use('/auth', router);
app.use('/pet-store', petStoreRouter);
app.use('/pets', ensureAuth, petsRouter);
app.use('/breeds', breedRouter);

app.use(errorHandler);

module.exports = app;