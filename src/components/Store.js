import React from 'react';
import { Link } from 'react-router-dom';

function Store(props) {
  // const selectedStore = props.stores.filter((store) => {
    // return store.storeId === props.params.storeId;
  // })

  return (
    <div>
      <ul>
        <h3> Welcome to Petz Emporium's store # {props.match.params.storeId} </h3>
        <ul> store name: {props.location.state.store.storeName} </ul>
        <ul> pet specialty: {props.location.state.store.petSpecialty} </ul>
        <ul> store location: {props.location.state.store.storeLocation} </ul>

        <h3> Pets Available at this Store </h3>

        {/*{props.location.state.store.pet.map(pet => {
          return (
              <ul key={pet.petId}>
                <li> type: {pet.type} </li>
                <li> breed: {pet.breed} </li>
                <li> gender: {pet.gender} </li>
              </ul>
          )
        })}

          <select id='petTypes' name='petType'>

              <option value='all' defaultValue>All</option>
              <option value='dog'>Dogs</option>
              <option value='bird'>Birds</option>
              <option value='cat'>Cats</option>

              <option value='dog'
                { ...props.location.state.store.store.map(store => {
                  return (
                    <ul key={store.storeLocation}>
                      <li>store name: {store.storeName}</li>
                    </ul>
                  )
                })}>Stores</option>


          </select>*/}

      </ul>
    </div>
  );
};

export default Store;
