import React from 'react';
import HomePage from './HomePage';
import StorePage from './StorePage';
import { Route } from 'react-router-dom';


export default function PageBody(props) {
  return (
    <div>
      < Route exact path='/home' component={ HomePage } />
      < Route path='/stores' component={ StorePage } />
    </div>
  );
}
