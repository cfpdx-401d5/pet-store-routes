import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import { Stores } from './components/Stores';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petStores: [{
        name: 
        location:
      }, {

      }, {

      }]
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
          
          <Route exact path='/' component={Home}/>
          <Route path='/stores' component={Stores}/>
        </nav>

      </Router>
    );
  }
}


export default App;
