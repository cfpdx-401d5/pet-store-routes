const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Pet = require('../model/pet-schema');

router
    .post('/', bodyParser, (req, res, next) => {
        new Pet(req.body).save()
        .then(pet => {
            res.send(pet);
        })
        .catch(next);
    })
    .get('/', (req, res, next) => {
        Pet.find()
        .lean()
        .then(pets => res.send(pets))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Pet.findById(req.params.id)
        .lean()
        .then(pet => res.send(pet))
        .catch(next);
    });

module.exports = router;