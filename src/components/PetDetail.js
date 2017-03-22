import React from 'react';

const PetDetail = (props) => {
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

export default PetDetail;
