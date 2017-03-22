import React from 'react';
import { Link } from 'react-router-dom';

const PetList = ({ match, pets }) => {
  let petList = pets.map(x => {
    return (
      <li key={x.id}>
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

export default PetList;
