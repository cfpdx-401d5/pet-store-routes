const fetch = require('node-fetch');

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

function fetcher(options) {
    const { method, path, body } = options;
    return fetch(`http://localhost:4000${path}`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })
    .then(res => {
        if (!res.ok) {
            throw Error(res.statusText);
        }
        return res;
    })
    .then(res => res.json());
}

function loadDB() {
    const promiseArray = pets.map(pet => {
        return fetcher({method: 'POST', path: '/pets', body: pet})
            .then(res => {
                pet._id = res._id;
                pet.__v = res.__v;
            });
    });

    Promise.all(
        promiseArray
    )      
    .then(() => {
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
        stores.forEach(store => {
            console.log('store: ', store);
            return fetcher({ method: 'POST', path: '/stores', body: store})
            .catch(err => console.error('err: ', err));
        });
    })
            .catch(err => console.error('err: ', err));
}

loadDB();