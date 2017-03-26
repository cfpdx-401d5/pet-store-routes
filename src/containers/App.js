import React, { Component } from 'react';
import Home from '../components/Home';
import Stores from '../components/Stores';
import Store from '../components/Store';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      stores: [
        {
          id: 1,
          storeName: 'BoZen Petz',
          storeLocation: 'Beaverton',
          petSpecialty: 'dogs',
          pets: [
            {
              petId: 1,
              storeId: 1,
              type: 'dog',
              breed: 'cattle dog',
              gender: 'male',
            },
            {
              petId: 2,
              storeId: 1,
              type: 'dog',
              breed: 'corgi',
              gender: 'female',
            }
          ]
        },
        {
          id: 2,
          storeName: 'Featherz Petz',
          storeLocation: 'Tigard',
          petSpecialty: 'birds',
          pets: [
            {
              petId: 3,
              storeId: 2,
              type: 'bird',
              breed: 'african grey parrot',
              gender: 'male',
            },
                      {
              petId: 4,
              storeId: 2,
              type: 'bird',
              breed: 'blue macaw',
              gender: 'male',
            }
          ]
        },
        {
          id: 3,
          storeName: 'Tiger Petz',
          storeLocation: 'Lake Oswego',
          petSpecialty: 'cats',
          pets: [
            {
              petId: 5,
              storeId: 3,
              type: 'cat',
              breed: 'burmese cat',
              gender: 'female',
            },
            {
              petId: 6,
              storeId: 3,
              type: 'cat',
              breed: 'manx cat',
              gender: 'male',
            }
          ]
        }
      ]
      
    }
  }
  render() {
    return (
      <div>

        <Route exact path='/' component={Home} />

        <Route exact path='/stores' render={(props) => (
          <Stores { ...props } 
            stores={this.state.stores}
          />
        )} 
        />

        <Route path='/stores/:id' component={Store} />

      </div>
    );
  }
}

export default App;
