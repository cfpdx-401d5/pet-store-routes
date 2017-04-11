import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome To Pets R Cool</h1>
            <Link to="/stores">View Stores</Link>
        </div>

    );
}; //end home
export default Home;