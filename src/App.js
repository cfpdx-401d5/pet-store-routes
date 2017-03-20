import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import { Stores } from './components/Stores';

import './App.scss';

const App = () => (
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

export default App;
