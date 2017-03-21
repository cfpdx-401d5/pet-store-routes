import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/stores'>Stores</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
        </ul>
    );
}