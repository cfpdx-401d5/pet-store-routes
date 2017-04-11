import React from 'react';
import { Link } from 'react-router-dom';

export default function StoreLocations({ match, stores }) {
  return (
    <div>
      <ul>
        {stores.map(store => {
          return <li key={store._id} ><Link to={`${match.url}/${store._id}`}>{store.name}</Link></li>;
        })}
      </ul>
    </div>
  );
}

      // <Route path={`${match.url}/:store`} replace={true} render={() => {
      //   console.log('in the render');
      //   return (<div>{match.params.store}</div>);
      // }}

