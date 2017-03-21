import React from 'react';

const Store = ({ match }) => (
  <div>
    <h3>{match.params.storeId}</h3>
  </div>
);

export default Store;
