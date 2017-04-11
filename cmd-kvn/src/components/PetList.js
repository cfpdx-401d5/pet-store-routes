import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petList: props.pets,
    };
    this.handleChange = this.handleChange.bind(this);
    /* beginning breaking down a query in the url */
    // console.log('props is', props.location.search.slice(1).split('&').map(x => {
    //   const new = x.split('=');
    //   return {  };
    // }));
  }

  handleChange(e) {
    if (!e.target.value) {
      this.setState({ petList: this.props.pets });
    } else {
      const filteredPets = this.props.pets.filter(x => {
        if (!e.target.value) {
          return true;
        } else return (x.type === e.target.value);
      });
      this.setState({ petList: filteredPets });
    }
  }

  render() {
    const petList = this.state.petList.map(x => {
      return (
        <li key={x.id}>
          <Link to={`${this.props.match.url}/${x.id}`}>
            {x.breed} {x.type}
          </Link>
        </li>
      );
    });

    return (
      <div>
        <h4>Pets at our store</h4>
        <select onChange={this.handleChange}>
          <option value='' disabled selected>Sort by pet type</option>
          <option value=''>All</option>
          <option value='Dog'>Dog</option>
          <option value='Cat'>Cat</option>
          <option value='Bird'>Bird</option>
        </select>
        <ul>{petList}</ul>
      </div>
    );
  }
}

export default PetList;
