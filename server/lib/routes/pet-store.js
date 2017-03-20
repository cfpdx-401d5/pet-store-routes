const bodyParser = require('body-parser').json();
const express = require('express');

const PetStore = require('../models/pet-store');

const Router = express.Router;
const petStoreRouter = Router();

petStoreRouter

    .get('/', (req, res, next) => {
        PetStore.find()
            .then(petStores => res.send(petStores))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        PetStore.findById(req.params.id)
            .then(petStore => {
                if(!petStore){
                    res.status(404).send({ error: 'Pet Store ID does not exist'});
                }
                else {
                    res.send(petStore);
                }
            })
            .catch(next);
    })
    .get('/:id/pets', (req, res, next) => {
        PetStore.findById(req.params.id)
            .then(petStore => {
                if(!petStore){
                    res.status(404).send({ error: `Pet Store ID ${req.params.id} does not exist`});
                }
                else if(req.query.type) {
                    petStore.find({petsByBreed: [`${req.query.type}`]})
                        .then(petBreeds => {
                            res.send(petBreeds);
                        })
                }
                else {
                    res.send(petStore.petsByName);
                }
            })
    })
    .post('/', bodyParser, (req, res, next) => {
        new PetStore(req.body).save()
            .then(petStore => {
                if(!petStore){
                    res.status(400).send({error: 'Invalid Pet Store Submission'})
                }
                else {
                    res.send(petStore);
                }
            })
            .catch(next);
    })
    .patch('/edit/:id', bodyParser, (req, res, next) => {
        return PetStore.findByIdAndUpdate(req.params.id)
            .then(petStore => {
                petStore.name = req.body.name || petStore.name;
                petStore.location = req.body.location || petStore.location;
                petStore.petsByBreed = req.body.petsByBreed || petStore.petsByBreed;
                petStore.petsByName = req.body.petsByName || petStore.petsByName;
                petStore.save();
                return petStore;
            })
            .then(petStore => res.send(petStore))
            .catch(next);
    })
     .delete('/:id', (req, res, next) => {
        PetStore.findByIdAndRemove(req.params.id)
            .then( () => res.send({message: `You have removed ${petStore.name}`}))
            .catch(next);
    });

module.exports = petStoreRouter;