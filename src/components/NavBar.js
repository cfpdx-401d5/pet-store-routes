import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div>
      <button><Link to='/'>Home</Link></button>
      <button><Link to='/stores'>Stores</Link></button>
    </div>
  );
}
