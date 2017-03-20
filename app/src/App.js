import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';

class App extends Component {
    render() {
        return (
          <div>
            <Navigation />
            <Home />
          </div>
        );
    }
}

export default App;
