import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1> Welcome to BoZen's Petz Emporium </h1>
      <Link to="/stores"> Petz Store Locations </Link>
    </div>
  );
};

export default Home;
