import React, { Component } from 'react';
import Selector from './Selector';
import { Route } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import Stores from './Stores';
import Store from './Store';



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
              <Route exact strict path="/signup" component={Signup}/>
              <Route exact strict path="/signin" component={Signin}/>
              <Route exact strict path="/stores" component={Stores}/>
              <Route path="/stores/:id" component={Store}/>
            </div>
        );
    }
}
