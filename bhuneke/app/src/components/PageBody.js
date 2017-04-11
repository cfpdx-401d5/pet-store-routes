import React from 'react';
import HomePage from './HomePage';
import StoreLocations from './StoreLocations';
import StorePage from './StorePage';
import { Route } from 'react-router-dom';


export default function PageBody(props) {
  const stores = props.stores;
  return (
    <div>
      < Route exact path='/' component={ HomePage } />
      < Route exact path='/stores' render={ props => (<StoreLocations {...props} stores={stores}/>)} />
      < Route path='/stores/:store' component={ StorePage }/>
    </div>
  );
}
