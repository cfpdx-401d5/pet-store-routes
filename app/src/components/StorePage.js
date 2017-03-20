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
    });
  }

  componentWillMount() {
    this.doFetch(this.props.match.params.store);
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <div>{match.params.id} STATIC STORE INFO COMPONENT</div>
        <div>CHANGING INFO PER USER SELECTION
          <Route exact path={match.url} render={() => 
            (<div>
            <Link to={match.url + '/pets/pet1'}>pet one</Link>
            <Link to={match.url + '/pets/pet2'}>pet two</Link>
            <Link to={match.url + '/pets/pet3'}>pet three</Link>
            </div>)
          }/>
          <Route path={match.url + '/pets/:pet'} render={() => 
            (<span>pet 1<Link to={match.url}>back to list of pets</Link></span>)
          }/>
        </div>
      </div>
    );
  }
};

export default StorePage;

