import React, { PropTypes } from 'react';
import 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import fetcher from '../helpers/fetcher';

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
      console.log(store)
    });
  }

  componentWillMount() {
    this.doFetch(this.props.match.params.store);
  }

  render() {
    const { match } = this.props;
    const pets = this.state.store.pets;
    console.log('pets', pets)
    if(pets) {
      return (
        <div>
          <div>{match.params.id} STATIC STORE INFO COMPONENT</div>
          <div>CHANGING INFO PER USER SELECTION
            <Route exact path={match.url} render={() => 
              (<ul>
                {pets.map(pet => {
                  return <li><Link to={match.url + `/pets/${pet._id}`}>{pet.name}</Link></li>
                })}
              </ul>)
            }/>
            <Route path={match.url + '/pets/:pet'} render={() => 
              (<span>pet 1<Link to={match.url}>back to list of pets</Link></span>)
            }/>
          </div>
        </div>
      );
    } else {return <div>loading...</div>}
  }
};

export default StorePage;


            