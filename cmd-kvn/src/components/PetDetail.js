import React from 'react';
// import Route from 'react-router-dom';

const PetDetail = ({ match, pets }) => {
  let urlArrayed = match.url.split('/');
  let id = urlArrayed[4];

  let petDetail = pets.filter(x => {
    return (x.id === id);
  });

  return (
    <article>
        Pet type: {petDetail[0].type} <br/>
        Breed: {petDetail[0].breed} <br/>
        Cost: {petDetail[0].cost} <br/>
    </article>
  );
};

export default PetDetail;
