import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Home from './components/Home';
import Stores from './components/Stores';
import Store from './components/Store';
import petStores from './_data/pet-stores';
import pets from './_data/pets';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petStores: petStores,
      pets: pets
    };
  }

  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/stores'>Stores</Link></li>
          </ul>
          <hr/>
          
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/stores' render={(props) => <Stores {...props} stores={this.state.petStores}/>} />
            <Route path='/stores/:storeId/pets' render={(props) => <Store {...props} stores={this.state.petStores} pets={this.state.pets} />} />
            <Route component={Home}/>
          </Switch>
        </nav>

      </Router>
    );
  }
}


export default App;
