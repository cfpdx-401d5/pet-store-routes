import React, { PropTypes, Component } from 'react';

export default class PetType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      store: this.props.store,
      pets: this.props.store.pets,
      filteredPets: []
    }
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  render() {
    const pets = this.state.pets;
    
    if(!pets) return null;
    return (
      <div>
        <select onChange={e => {       
          const filtered = pets.filter(pet => {
             return pet.type===e.target.value;
          })
          this.setState({...this.state, filteredPets: filtered});
        }}>
          {pets.map(pet => {
            return <option key={pet._id} value={pet.type}>{pet.type}</option>
          })}
        </select>
        <div>See all {this.state.filter}:</div>
      </div>
    )
  }
}
