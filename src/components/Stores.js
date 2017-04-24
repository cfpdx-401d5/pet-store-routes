import React from 'react';
import { Link } from 'react-router-dom';

function Stores(props) {
  return (
    <div>
      <h2> Petz Store Locations </h2>
        <ul>
          {props.stores.map(store => {
            return (
              <li key={store.storeId}>
                  <Link to={{
                    pathname: `/stores/${store.storeId}`,
                    state: { store: store }
                  }}>
                    {store.storeLocation}
                  </Link>
              </li>
            ) 
          })}
        </ul> 
    </div>  
  );
};

export default Stores;
