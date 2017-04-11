import React, { Component } from 'react';
import { Route, NavLink, Switch, BrowserHistory } from 'react-router-dom';
import Home from '../components/Home';
import Stores from '../components/Stores';
import Store from '../components/Store';
import '../styles/styles.css';


const NoMatch = ({ location }) => (
  <div><h3>No match for <code>{location.pathname}</code></h3></div>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [{
        store_id: 1,
        location: 'Downtown',
        street: '1234 Main Street',
        city: 'Yourtown'
      },
      {
        store_id: 2,
        location: 'Midtown',
        street: '4533 West Houston Avenue',
        city: 'Yourtown'
      },
      {
        store_id: 3,
        location: 'Uptown',
        street: '89982 Outer Suburbs',
        city: 'Yourtown'
      }],
      pets: [
        {
          pet_id: 11,
          name: 'george',
          storeId: 1,
          type: 'cat',
          cost: '$2'
        },
        {
          pet_id: 12,
          storeId: 1,
          name: 'petunia',
          type: 'parakeet',
          cost: '$12'
        },
        {
          pet_id: 24,
          storeId: 2,
          name: 'hairy',
          type: 'sloth',
          cost: '$3'
        }, {
          pet_id: 21,
          storeId: 2,
          name: 'gladys',
          type: 'cat',
          cost: '$7'
        },
        {
          pet_id: 22,
          storeId: 2,
          name: 'slipper',
          type: 'parakeet',
          cost: '$17'
        },
        {
          pet_id: 34,
          storeId: 3,
          name: 'forager',
          type: 'sloth',
          cost: '$6'
        },
      ]
    }
  }
  render() {
    return (
      <div className='outermost'>
        <div className='navbar'>
          <NavLink className='navlink' to="/">Home</NavLink>
          <NavLink className='navlink' to="/stores">Stores</NavLink>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/stores' render={(props) => (
            <Stores { ...props }
              stores={this.state.stores}
              pets={this.state.pets} />
          )} />

          <Route path='/store/:store_id' render={(props) => (
            <Store { ...props }
              stores={this.state.stores}
              pets={this.state.pets} />
          )} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
