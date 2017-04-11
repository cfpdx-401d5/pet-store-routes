import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import App from './App';
import StoreList from './StoreList';
import StoreView from './StoreView';
import PetView from './PetView';
import LogIn from './LogIn';

function NotFound() {
    return (
      <div>
        <h1>Not Found</h1>
      </div>
    );
}

export default function Navigation(props) {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/stores'>Stores</Link></li>
            <li><Link to='/user'>Sign Up/ Log In</Link></li>

            <Switch>
              <Route exact path='/' component={App}/>
              <Route exact path='/stores' component={StoreList}/>
              <Route strict exact path='/stores/:store/pets' component={StoreView} />
              <Route path='/stores/:store/pets/:pet' component={PetView} />
              <Route exact path='/user' component={LogIn} />
              <Route component={NotFound} />
            </Switch>
        </ul>
    );
}
