const bodyParser = require('body-parser').json();
const express = require('express');

const Breed = require('../models/pet-breeds');

const Router = express.Router;
const breedRouter = Router();

breedRouter

    .get('/', (req, res, next) => {
        Breed.find()
            .then(breeds => res.send(breeds))
            .catch(next);
    })
    .post('/', bodyParser, (req, res, next) => {
        new Breed(req.body).save()
            .then(breed => {
                if(!breed) {
                    res.status(400).send({ error: 'Invalid Breed Submission' })
                }
                else {
                    res.send(breed);
                }
            })
            .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        Breed.findByIdAndRemove(req.params.id)
            .then( () => {
                res.send({ message: `You have removed Breed ${req.params.id}`})
            })
            .catch(next);
    })

    module.exports = breedRouter;