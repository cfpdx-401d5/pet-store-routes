import React from 'react';
import StorePage from './StorePage';
import { Route, Link } from 'react-router-dom';

export default function StoreLocations(props) {
  return (
    <div>
      <ul>
        <li><Link to='/stores/storeone'>Store One</Link></li>
        <li>Store Two</li>
        <li>Store Three</li>
      </ul>

      <Route exact path='/stores/storeone' component={ StorePage }/>
    </div>
  );
}
