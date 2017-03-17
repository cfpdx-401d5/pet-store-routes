import React from 'react';
import HomePage from './HomePage';
import StoreLocations from './StoreLocations';
import { Route } from 'react-router-dom';


export default function PageBody(props) {
  return (
    <div>
      < Route exact path='/' component={ HomePage } />
      < Route exact path='/stores' component={ StoreLocations } />
    </div>
  );
}
