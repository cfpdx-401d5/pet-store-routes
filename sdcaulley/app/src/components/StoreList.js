import React from 'react';
import { connect } from 'react-redux';
import { storesFetchData } from '../actions/stores';
import { Link } from 'react-router-dom';

function CreateStoreList(props) {
    const storeArray = props.stores.map(store => {
        return <li key={store._id}><Link to={`/stores/${store._id}/pets`}>{store.name}, {store.location}</Link></li>;
    });
    return (
        <div>
            <h1>Our Store Locations</h1>
            <ul>{storeArray}</ul>
        </div>
    );
}

class StoreList extends React.Component {
    componentWillMount() {
        this.props.fetchData({ method: 'GET', path: '/stores' });
    }

    render() {
        return (
            <CreateStoreList stores={this.props.stores} />
        );
    }     
}

function mapStateToProps(state) {
    return {
        stores: state.stores
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (options) => dispatch(storesFetchData(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreList);

StoreList.propTypes = {
    stores: React.PropTypes.array,
    fetchData: React.PropTypes.func
};

CreateStoreList.propTypes = {
    stores: React.PropTypes.array
};
