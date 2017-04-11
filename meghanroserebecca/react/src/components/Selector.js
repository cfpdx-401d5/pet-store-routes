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
        },
        {
            handle: '/signup',
            name: 'Signup',
            id: 3
        },
        {
            handle: '/signin',
            name: 'Signin',
            id: 4
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