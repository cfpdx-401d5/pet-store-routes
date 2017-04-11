import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Petz Emporium</h1>
      <Link to="/stores">List of Stores</Link>
    </div>
  );
};

export default Home;