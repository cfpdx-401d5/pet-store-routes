import React from 'react';

const Store = ({ match, stores }) => {
  let petStore;

  if (match.params.storeId === stores[0].id) petStore = stores[0];
  else if (match.params.storeId === stores[1].id) petStore = stores[1];
  else if (match.params.storeId === stores[2].id) petStore = stores[2];
  
  return (
    <div>
      <h3>{petStore.name}</h3>
      <p>Location: {petStore.location}</p>
    </div>
  );
};

export default Store;
