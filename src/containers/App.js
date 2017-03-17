import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import PageBody from '../components/PageBody';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          < Route path='/' component={ NavBar } />
          < PageBody />
        </div>
      </Router>
    );
  }
}

export default App;
