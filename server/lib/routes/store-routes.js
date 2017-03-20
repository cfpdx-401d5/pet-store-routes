const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Store = require('../model/store-schema');

router
    .post('/', bodyParser, (req, res, next) => {
        new Store(req.body).save()
        .then(store => {
            res.send(store);
        })
        .catch(next);
    })
    .get('/', (req, res, next) => {
        Store.find()
        .lean()
        .then(stores => res.send(stores))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Store.findById(req.params.id)
        .lean()
        .then(store => res.send(store))
        .catch(next);
    })
    .get('/:id/pets', (req, res, next) => {
        const query = {};
        if (req.query.type) {
            query.type = req.query.type;
        }
        Store.find(query)
            .populate('pets')
            .then(store => res.send(store))
            .catch(next);
    });

module.exports = router;