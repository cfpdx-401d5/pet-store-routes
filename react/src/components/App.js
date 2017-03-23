import React, { Component } from 'react';
import Selector from './Selector';
import { Route } from 'react-router-dom';
import Home from './Home';
import Stores from './Stores';
import Store from './Store';
import Pets from './Pets';
import Pet from './Pet';


export default class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        pageView: 'home',
        viewStyle: null,
      };
    }


  render() {
    return (
      <div className="App">
        <Selector/>
        <Route exact path="/" component={Home}/>
        <Route exact strict path="/stores" component={Stores}/>
        <Route path="/stores/:id" component={Store}/>
        <Route path="/stores/:id/pets" component={Pets}/>
        <Route path="/stores/:id/pets/:petId" component={Pet}/>
      </div>
    );
  }
}
