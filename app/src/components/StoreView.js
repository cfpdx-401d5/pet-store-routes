import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { storesFetchOne } from '../actions/stores';
import PetView from './PetView';

function PetList(props) {
    console.log('props: ', props);
    console.log('activeStore: ', props.activeStore);
    const petsArray = props.activeStore.pets.map(pet => {
        return (<li key={pet._id}><Link to={`/pets/${pet._id}`}>{pet.name}
            <li>{pet.gender}</li>
            <li>{pet.category}</li>
            <li>{pet.description}</li>
            </Link></li>);
    });

    return (
        <div>
            <h1>{props.activeStore.name}</h1>
            <h3>{props.activeStore.location}</h3>
            <ul>{petsArray}</ul>

            <Route exact path='/pets/:id' component={PetView} />
        </div>
    );
}

class StoreView extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchOne({ method: 'GET', path: `/stores/${this.props.match.params.id}/pets` });
    }
    
    render() {
        if (!this.props.activeStore) {
            return <PetList />;
        }
        return <PetList />;
    }
}

function mapStateToProps(state) {
    console.log('state: ', state);
    return {
        activeStore: state.activeStore
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOne: (options) => dispatch(storesFetchOne(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreView);

StoreView.propTypes = {
    fetchOne: React.PropTypes.func,
    activeStore: React.PropTypes.object,
    match: React.PropTypes.object
};

PetList.propTypes = {
    activeStore: React.PropTypes.object
};
