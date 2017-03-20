import React, { PropTypes } from 'react';
import 'react-router-dom';
import { Route, Link } from 'react-router-dom';

class StorePage extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <div>{match.params.storeone} STATIC STORE INFO COMPONENT</div>
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

