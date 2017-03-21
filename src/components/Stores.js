import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';

const Stores = ({ match, stores }) => {
    // this can be refactored using map to create <Links> with { stores }
  const northPortland = stores[0];
  const westWillamette = stores[1];
  const eastWillamette = stores[2];

  return (
    <div>
        <h2>Stores</h2>
        <ul>
            <li>
                <Link to={`${match.url}/${northPortland.id}/pets`}>
                    {northPortland.name}
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/${westWillamette.id}`}>
                    {westWillamette.name}
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/${eastWillamette.id}`}>
                    {eastWillamette.name}
                </Link>
            </li>
        </ul>

        <Route exact path={match.url} render={() => (
            <h3>Please select a store location.</h3>
        )} />
    </div>
  );
};

export default Stores;
