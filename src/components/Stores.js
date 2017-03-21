import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

const Stores = ({ match }) => (
  <div>
    <h2>Stores</h2>
    <ul>
      <li>
        <Link to={`${match.url}/north-portland`}>
          North Portland
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/west-willamette`}>
          West Willamette
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/east-willamette`}>
          East Willamette
        </Link>
      </li>
    </ul>

    <Route exact path={match.url} render={() => (
      <h3>Please select a store location.</h3>
    )}/>
  </div>
);

export default Stores;
