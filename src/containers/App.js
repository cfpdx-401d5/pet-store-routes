import React, { Component } from 'react';
import Home from '../components/Home';
import Stores from '../components/Stores';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      stores: [
      {
        id: 1,
        storeName: 'BoZen Petz',
        location: 'Beaverton,'
      },
      {
        id: 2,
        storeName: 'Featherz Petz',
        location: 'Tigard',
      },
      {
        id: 3,
        storeName: 'Tiger Petz',
        location: 'Lake Oswego',
      }],
      
      pets: [
      {
        id: 1,
        storeId: 1,
        type: 'dog',
        breed: 'cattle dog',
      },
      {
        id: 2,
        storeId: 3,
        type: 'cat',
        breed: 'burmese cat',
      },
      {
        id: 3,
        storeId: 2,
        type: 'bird',
        breed: 'african grey parrot',
      },
      {
        id: 4,
        storeId: 1,
        type: 'dog',
        breed: 'corgi',
      }],

    }
  }
  render() {
    return (
      <div>

        <Route exact path='/' component={Home} />

        <Route path='/stores' render={(props) => (
          <Stores { ...props } stores={this.state.stores} pets={this.state.pets} />
        )} />

      </div>
    );
  }
}

export default App;
