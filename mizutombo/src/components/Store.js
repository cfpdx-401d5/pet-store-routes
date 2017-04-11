import React from 'react';

function Store(props) {
  // const selectedStore = props.stores.filter((store) => {
  //   return store.id === props.params.id;
  // })

  return (
    <div>
      <ul>
        <p>Welcome to Petz Emporium's store # {props.match.params.id} </p>
        <ul>store name: {props.location.state.store.storeName}</ul>
        <ul>pet specialty: {props.location.state.store.petSpecialty}</ul>
        <ul>store location: {props.location.state.store.storeLocation}</ul>
        <br />

        {props.location.state.store.pets.map(pet => {
            return (
              <ul key={pet.petId}>
                <li>type: {pet.type}</li>
                <li>breed: {pet.breed}</li>
                <li>gender: {pet.gender}</li>
                <br />
              </ul>
            )
          })}

          <select id='petTypes' name='petType'>

              {/*<option value='all' defaultValue>All</option>
              <option value='dog'>Dogs</option>
              <option value='bird'>Birds</option>
              <option value='cat'>Cats</option>*/}

              <option value='dog'
                { ...props.location.state.store.store.map(store => {
                  return (
                    <ul key={store.storeLocation}>
                      <li>store name: {store.storeName}</li>
                    </ul>
                  )
                })}>Stores</option>


          </select>


      </ul>
    </div>
  );
};

export default Store;
