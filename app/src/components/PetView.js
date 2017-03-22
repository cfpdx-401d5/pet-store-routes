import React from 'react';
import { connect } from 'react-redux';
import { petsFetchData } from '../actions/pets';
import { Link } from 'react-router-dom';

function PetDetails(props) {
    if (!props.pets) {
        return null;
    }

    return (
        <div>
            Name: {props.pets.name} <br/>
            Gender: {props.pets.gender} <br/>
            Category: {props.pets.category} <br/>
            Description: {props.pets.description} <br/>
            <button><Link to=''>Buy</Link></button>
        </div>
    );
}

class PetView extends React.Component {
    componentWillMount() {
        this.props.fetchPet({ method: 'GET', path: `/pets/${this.props.match.params.pet}` });
    }

    render() {
        return (<PetDetails pets={this.props.pets}/>);
    }
}

function mapStateToProps(state) {
    return {
        pets: state.activePet
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPet: (options) => dispatch(petsFetchData(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PetView);

PetView.propTypes = {
    fetchPet: React.PropTypes.func,
    pets: React.PropTypes.object,
    match: React.PropTypes.object
};

PetDetails.propTypes = {
    pets: React.PropTypes.object
};
