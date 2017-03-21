import React from 'react';
import { Link } from 'react-router-dom';


export default function Selector(props) {
    const buttons = [
        {
            handle: '/',
            name: 'Home',
            id: 1
        },
        {
            handle: '/stores',
            name: 'Stores',
            id: 2
        }
    ];

    return (
        <div>
            {buttons.map( b => 
                <Link key={b.id} to={b.handle}>{b.name}</Link>
            )}
        </div>
    )
}