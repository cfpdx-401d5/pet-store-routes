import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { storesFetchOne } from '../actions/stores';

function PetList(props) {
    if (!props.activeStore) {
        return null;
    }

    const petsArray = props.activeStore.pets.map(pet => {
        return (<li key={pet._id}><Link to={`/stores/${props.activeStore._id}/pets/${pet._id}`}>{pet.name}</Link></li>);
    });

    return (
        <div>
            <h1>{props.activeStore.name}</h1>
            <h3>{props.activeStore.location}</h3>
            <ul>{petsArray}</ul>
        </div>
    );
}

class StoreView extends React.Component {
    componentWillMount() {
        this.props.fetchOne({ method: 'GET', path: `/stores/${this.props.match.params.store}/pets` });
    }
    
    render() {
        return <PetList activeStore={this.props.activeStore}/>;
    }
}

function mapStateToProps(state) {
    
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
