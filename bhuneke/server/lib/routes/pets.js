const router = require('express').Router();
const bodyParser = require('body-parser').json();
//const Store = require('../models/store');
const Pet = require('../models/pet');

router

  .get('/', (req, res, next) => {
    Pet.find()
      .then(pets => res.send(pets))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const petId = req.params.id;

    Pet.findById(petId).lean()
      .then(pet => {
        res.send(pet);
      })
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    return new Pet(req.body).save()
      .then(pet => {
        res.status(201).send(pet);
      });
  });

module.exports = router;
