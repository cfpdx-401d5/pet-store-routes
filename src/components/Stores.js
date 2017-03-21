import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

const Stores = ({ match, stores }) => {
// this can be refactored using map to create <Links> with { stores }
  const northPortland = stores[0].id;
  const westWillamette = stores[1].id;
  const eastWillamette = stores[2].id;

  return (
        <div>
            <h2>Stores</h2>
            <ul>
            <li>
                <Link to={`${match.url}/${northPortland}`}>
                North Portland
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/${westWillamette}`}>
                West Willamette
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/${eastWillamette}`}>
                East Willamette
                </Link>
            </li>
            </ul>

            <Route exact path={match.url} render={() => (
            <h3>Please select a store location.</h3>
            )}/>
        </div>
  );
};

export default Stores;
