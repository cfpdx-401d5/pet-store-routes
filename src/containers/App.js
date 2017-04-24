import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';


import Home from '../components/Home';
import Stores from '../components/Stores';
import Store from '../components/Store';
import petzStores from '../data/petz-stores';
import petz from '../data/petz';

// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      petzStores: petzStores,
      petz: petz
    };
  }

  render() {
    return (
      <Router>
      <div>

        <ul>
          <li> <Link to='/'> Petz Home </Link> </li>
          <li> <Link to='/stores'> Petz Stores </Link> </li>
        </ul>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/stores' render={(props) => <Stores { ...props } stores={this.state.petzStores} />} />
          <Route path='/stores/:storeId' render={(props) => <Store { ...props } stores={this.state.petzStores} petz={this.state.petz} />} />
          <Route component={Home} />
        </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
