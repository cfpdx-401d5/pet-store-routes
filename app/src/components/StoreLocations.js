import React from 'react';
import StorePage from './StorePage';
import { Route, Link } from 'react-router-dom';

export default function StoreLocations({ match }) {
  console.log({match});
  return (
    <div>
      <ul>
        <li><Link to={`${match.url}/storeone`}>Store One</Link></li>
        <li><Link to={`${match.url}/storetwo`}>Store Two</Link></li>
        <li><Link to={`${match.url}/storethree`}>Store Three</Link></li>
      </ul>
    </div>
  );
}

      // <Route path={`${match.url}/:store`} replace={true} render={() => {
      //   console.log('in the render');
      //   return (<div>{match.params.store}</div>);
      // }}

