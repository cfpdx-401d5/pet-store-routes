import React from 'react';

export default function CartList(props) {
    const soldpets = props.pets.map(pet => {
        return <li key='pet._id'>pet.name</li>;
    });

    return (
        <ul>
            {soldpets}
        </ul>
    );
}
