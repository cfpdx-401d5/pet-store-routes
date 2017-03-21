import React from 'react';
import { Link } from 'react-router-dom';

function Stores(props) {
  return (
    <div>
      <h1> Pet Stores Directory </h1>
        <ul>
          {props.stores.map(store => {
            return (
              <li key={store.id}>
                  <Link to={`/stores/${store.id}`}>
                    {store.location}
                  </Link>
              </li>
            ) 
          })}
        </ul> 
    </div>  
  );
};

export default Stores;