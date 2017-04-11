const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Store = require('../models/store');
const Pet = require('../models/pet');

router

  .get('/', (req, res, next) => {
    Store.find()
      .then(stores => {
        console.log(stores);
        res.send(stores);
      })
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const storeId = req.params.id;

    Promise.all([
      Store.findById(storeId).lean(),
      Pet.find({ store: storeId }).lean()
    ])
    .then(results => {
      const store = results[0];
      const pets = results[1];

      store.pets = pets;

      res.send(store);
    })
    .catch(next);

  })

  .post('/', bodyParser, (req, res, next) => {
    return new Store(req.body).save()
      .then(store => {
        res.status(201).send(store);
      });
  });

module.exports = router;
