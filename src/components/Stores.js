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
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:storeId`} component={Store}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);

const Store = ({ match }) => (
  <div>
    <h3>{match.params.storeId}</h3>
  </div>
);
export { Stores, Store };
