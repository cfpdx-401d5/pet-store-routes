const app = require('express')();
const stores = require('./routes/stores');
const morgan = require('morgan')('dev');
const cors = require('cors')();

app.use(cors);
app.use(morgan);

app.use('/stores', stores);

module.exports = app;
