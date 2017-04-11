import React, { PropTypes } from 'react';
import fetcher from '../helpers/fetcher';
import { Link } from 'react-router-dom';

export default class PetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {}
    }
    this.doFetch = this.doFetch.bind(this);
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  doFetch(id) {
    fetcher({
      path: `/pets/${id}`,
      method: 'GET',
    })
    .then(res => {
      return res.json();
    })
    .then(pet => {
      this.setState({ pet });
    });
  }

  componentWillMount() {
    this.doFetch(this.props.match.params.pet);
  }

  render() {
    const pet = this.state.pet;

    if(!pet) return null;
    return (
      <div>
        <p>{pet.name}</p>
        <p>{pet.type}</p>
        <div><Link to={`/stores/${pet.store}`}>back to pet list</Link></div>
      </div>
    )
  }
}
