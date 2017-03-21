import React, { PropTypes } from 'react';
import 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';
import fetcher from '../helpers/fetcher';
import PetPage from './PetPage';
import PetType from './PetType';

class StorePage extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      store: {},
    }
    this.doFetch = this.doFetch.bind(this);
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  doFetch(id) {
    fetcher({
      path: `/stores/${id}`,
      method: 'GET',
    })
    .then(res => {
      return res.json();
    })
    .then(store => {
      this.setState({ store });
    });
  }

  componentWillMount() {
    this.doFetch(this.props.match.params.store);
  }

  render() {
    const { match } = this.props;
    const store = this.state.store;
    const pets = this.state.store.pets;
    
    if(pets) {
      return (
        <div>
          <div>
            <h1>{store.name}</h1>
            <h3>{store.location}</h3>
          </div>
          <Switch>
            <Route exact path={match.url} render={(props) => (
                <div>
                  <ul>Available Pets:
                    {pets.map(pet => {
                      return <li key={pet._id}><Link to={match.url + `/pets/${pet._id}`}>{pet.name}</Link></li>
                    })}
                  </ul>
                  <PetType {...props} store={store}/>
                </div>
              )
            }/>
            
            <Route path={match.url + '/pets/:pet'} render={(props) => (
              <PetPage {...props} pets={pets}/>
            )}/>
          </Switch>
        </div>
      );
    } else {return <div>loading...</div>}
  }
};

export default StorePage;

//(<div>pet 1<Link to={match.url}>back to list of pets</Link></div>)
            