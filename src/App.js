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
            {/*use render={(props) => <Stores {...props} stores={this.state.stores}/>*/}
            <Route exact path='/stores' component={Stores}/>
            <Route path='/stores/:storeId' component={Store} />
            <Route component={Home}/>
          </Switch>
        </nav>

      </Router>
    );
  }
}


export default App;
