import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <h1>Welcome to Pets R Kewl</h1>
                <Link to='/stores'>View Store Locations></Link>
            </div>
        );
    }
}

export default App;
