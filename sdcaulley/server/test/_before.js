process.env.MONGODB_URI = 'mongodb://localhost:27017/pet-store-test';
require('../lib/connection');
const mongoose = require('mongoose');

before(() => mongoose.connection.dropDatabase());

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app');
const request = chai.request(app);

before(() => {
    const pets = [
        {
            name: 'Daisy',
            gender: 'female',
            sold: false,
            category: 'dog',
            description: 'a frisky Beagle'
        },
        {
            name: 'Tux',
            gender: 'male',
            sold: false,
            category: 'dog',
            description: 'a stately pomeranian'
        },
        {
            name: 'Gumdrop',
            gender: 'female',
            sold: false,
            category: 'dog',
            description: 'a chihuahua with an attitude'
        },
        {
            name: 'Yurtle',
            gender: 'male',
            sold: false,
            category: 'amphibian',
            description: 'Red-eared slider turtle'
        },
        {
            name: 'Coloretto',
            gender: 'female',
            sold: false,
            category: 'amphibian',
            description: 'a beautiful salamander'
        },
        {
            name: 'Kermit',
            gender: 'male',
            sold: false,
            category: 'amphibian',
            description: 'It is not easy being green'
        },
        {
            name: 'Paws',
            gender: 'male',
            sold: false,
            category: 'cat',
            description: 'an ally cat with an attitude'
        },
        {
            name: 'Boots',
            gender: 'female',
            sold: false,
            category: 'cat',
            description: 'a stately persian'
        },
        {
            name: 'Felix',
            gender: 'male',
            sold: false,
            category: 'cat',
            description: 'a tortoiseshell looking for a new home'
        }
    ];

    const stores = [
        {
            name: 'Petmart',
            location: 'Montivilla',
            pets: [pets[0]._id, pets[3]._id, pets[6]._id]
        },
        {
            name: 'Pets R Us',
            location: 'Clackamas',
            pets: [pets[1]._id, pets[4]._id, pets[7]._id]
        },
        {
            name: 'Pets for Everyone',
            location: 'Laurelhurst',
            pets: [pets[2]._id, pets[5]._id, pets[8]._id]
        }
    ];
    
    function savePet(pet) {
        return request.post('/pets')
            .send(pet)
            .then(res => {
                pet._id = res.body._id;
                pet.__v = res.body.__v;
            })
            .catch(err => console.error('err: ', err));
    }

    function saveStore(store) {
        return request.post('/stores')
            .send(store)
            .then(res => res.body)
            .catch(err => console.error('err: ', err));
    }

    pets.forEach(pet => {
        savePet(pet);
    });

    stores.forEach(store => {
        saveStore(store);
    });

});