import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function HomePage(props) {
  return (
    <div>
      <h1>Welcome to Pet Stores</h1>
      <button><Link to='/stores'>Go to Stores</Link></button>
    </div>
  );
} 
