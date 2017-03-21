import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';

const Pet = (props) => {
  let petDetails = props.pets.map(x => {
    return (
      <article>
        Pet type: {x.type} <br/>
        Breed: {x.breed} <br/>
        Cost: {x.cost} <br/>
      </article>
    );
  });

  return <section>{petDetails}</section>;
};

const PetList = ({ match, pets }) => {
  let petList = pets.map(x => {
    return (
      <li>
        <Link to={`${match.url}/${x.id}`}>
          {x.breed} {x.type}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h4>Pets at our store</h4>
      <ul>{petList}</ul>
    </div>
  );
};

const Store = ({ match, stores, pets }) => {
  let petStore;
  let animals;

  if (match.params.storeId === stores[0].id) petStore = stores[0];
  else if (match.params.storeId === stores[1].id) petStore = stores[1];
  else if (match.params.storeId === stores[2].id) petStore = stores[2];

  return (
    <div>
      {/*<Pet pets={[{ type: 'dog', breed: 'doggy', cost: '300' }, { type: 'doggy', breed: 'dogg', cost: '302' }]}/>*/}
      <h3>{petStore.name}</h3>
      <p>Location: {petStore.location}</p>
      <br/>
      {/*<h4>Pets at our store</h4>
      <ul>{animals}</ul>*/}
      <Route exact path='/stores/:storeId/pets' render={(props) => <PetList {...props} pets={pets}/>} />
      <Route exact path='/stores/:storeId/pets/:petId' render={(props) => <Pet {...props} pets={pets}/> }/>
      {/*<Route path='/stores/:storeId' render={(props) => <Store {...props} stores={this.state.petStores} pets={this.state.pets} />} />*/}

    </div>
  );
};

export default Store;

