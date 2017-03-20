const bodyParser = require('body-parser').json();
const express = require('express');

const Pets = require('../models/pets');

const Router = express.Router;
const petsRouter = Router();

petsRouter

    .get('/', (req, res, next) => {
        Pets.find()
            .then(pets => res.send(pets))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Pets.findById(req.params.id)
            .then(pet => {
                if(!pet){
                    res.status(404).send({ error: `Pet ID ${req.params.id} does not exist`})
                }
                else {
                    res.send(pet);
                }
            })
            .catch(next);
    })
    .post('/', bodyParser, (req, res, next) => {
        new Pets(req.body).save()
            .then(pet => {
                if(!pet) {
                    res.status(400).send({error: 'Invalid Pet Submission'})
                }
                else {
                    res.send(pet);
                }
            })
            .catch(next);
    })
    .patch('/edit/:id', bodyParser, (req, res, next) => {
        return Pets.findByIdAndUpdate(req.params.id)
            .then( pet => {
                pet.petName = req.body.petName || pet.petName;
                pet.petBreed = req.body.petBreed || pet.petBreed;
                pet.petAge = req.body.petAge || pet.petAge;
                pet.petDescription = req.body.petDescription || pet.petDescription;
                pet.save();
                return pet;
            })
            .then(pet => res.send(pet))
            .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        Pets.findByIdAndRemove(req.params.id)
            .then( () => {
                res.send({message: `You have removed ${Pets.petName}`})
            })
            .catch(next);
    })

    module.exports = petsRouter;