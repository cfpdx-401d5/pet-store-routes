import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { storesFetchOne } from '../actions/stores';

function CategoryFilter(props) {
    return (
        <select onChange={props.filter}>
            <option value='all'>All</option>
            <option value='dog'>Dogs</option>
            <option value='cat'>Cats</option>
            <option value='amphibian'>Amphibians</option>
        </select>
    );
}

function PetList(props) {
    if (!props.activeStore) {
        return null;
    }

    let petsArray = [];

    if (props.view === 'all') {
        petsArray = props.activeStore.pets.map(pet => {
            return (
            <li key={pet._id}><Link to={`/stores/${props.activeStore._id}/pets/${pet._id}`}>{pet.name}</Link></li>
            );
        }); 
    } else {
        petsArray = props.activeStore.pets.filter(pet => { //eslint-disable-line
            return (pet.category === props.view);
        }).map(pet => {
            return (
                <li key={pet._id}><Link to={`/stores/${props.activeStore._id}/pets/${pet._id}`}>{pet.name}</Link></li>
            );
        });
    }

    return (
        <div>
            <h1>{props.activeStore.name}</h1>
            <h3>{props.activeStore.location}</h3>
            <ul>{petsArray}</ul>
        </div>
    );
}

class StoreView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'all',
        };
        this.selectCategory = this.selectCategory.bind(this);
    }

    componentWillMount() {
        this.props.fetchOne({ method: 'GET', path: `/stores/${this.props.match.params.store}/pets` });
    }

    selectCategory(e) {
        this.setState({
            category: e.target.value
        });
    }
    
    render() {
        return (
            <div>
                <CategoryFilter filter={this.selectCategory} />
                <PetList activeStore={this.props.activeStore} view={this.state.category} />
            </div>
        );
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
    activeStore: React.PropTypes.object,
    view: React.PropTypes.string
};

CategoryFilter.propTypes = {
    filter: React.PropTypes.func
};
