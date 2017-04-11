import React from 'react';

function PetDetail(props) {
    console.log('props ', props);
    const pet = props.pets.filter(pet => {
        return pet.pet_id === +props.match.params.pet_id;
    });
    return (
        <div className='details'>
            <input type='button' value='Back To Pets' onClick={props.history.goBack} />
            {pet.length && (
                <div>
                    <h1>{pet[0].name} </h1>
                    <p>Pet Type: {pet[0].type}</p>
                    <p>Price: {pet[0].cost}</p>
                </div>
            )}
            {pet.length <= 0 && <h1>No pet found here</h1>}
        </div>
    )
};
export default PetDetail;