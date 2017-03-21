import React from 'react';

const Store = ({ match, stores, pets }) => {
  let petStore;
  let animals;

  if (match.params.storeId === stores[0].id) petStore = stores[0];
  else if (match.params.storeId === stores[1].id) petStore = stores[1];
  else if (match.params.storeId === stores[2].id) petStore = stores[2];
  
  animals = pets.map(x => {
    return (
      <li>{x.breed} {x.type}</li>
    );
  });

  return (
    <div>
      <h3>{petStore.name}</h3>
      <p>Location: {petStore.location}</p>
      <br/>
      <h4>Pets at our store</h4>
      <ul>{animals}</ul>
      {/*<Route exact path='/stores/:storeId/pets/:petId' />*/}
    </div>
  );
};

export default Store;

