import React from 'react';
import { Route } from 'react-router-dom';

import PetDetail from './PetDetail';
import PetList from './PetList';

const Store = ({ match, stores, pets }) => {
  let petStore;

  if (match.params.storeId === stores[0].id) petStore = stores[0];
  else if (match.params.storeId === stores[1].id) petStore = stores[1];
  else if (match.params.storeId === stores[2].id) petStore = stores[2];

  return (
    <div>
      <h3>{petStore.name}</h3>
      <p>Location: {petStore.location}</p>
      <br/>
      <Route exact path='/stores/:storeId/pets' render={(props) => <PetList {...props} pets={pets}/>} />
      <Route exact path='/stores/:storeId/pets/:petId' render={(props) => <PetDetail {...props} pets={pets}/> }/>
      {/*<Route path='/stores/:storeId' render={(props) => <Store {...props} stores={this.state.petStores} pets={this.state.pets} />} />*/}
    </div>
  );
};

export default Store;

