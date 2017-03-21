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

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petStores: [
        {
          name: 'North Portland',
          location: '123 N. Williams Ave.'
        }, {
          name: 'West Willamette',
          location: '456 W. Burnside St.'
        }, {
          name: 'East Willamette',
          location: '789 Stark St.'
        }],
      pets: [
        {
          type: 'Dog', 
          cost: '$2.00'
        },
        {
          type: 'Cat', 
          cost: '$1.00'
        },
        {
          type: 'Bird', 
          cost: '$300.00'
        },

      ]
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
