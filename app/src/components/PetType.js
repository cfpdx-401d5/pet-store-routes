// import React, { PropTypes, Component } from 'react';
// import { Route } from 'react-router-dom';

// export default class PetType extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filter: 'all pets',
//       store: this.props.store,
//       pets: this.props.store.pets,
//       filteredPets: this.props.store.pets
//     }
//   }

//   static propTypes = {
//     match: PropTypes.object.isRequired,
//   };

//   render(props) {
//     console.log('filter', this.state.filter);
//     console.log('', this.state.filteredPets);
//     const match = { match };
//     const pets = this.state.pets;
//     const filteredPets = this.state.filteredPets;
//     if(!pets) return (<p>loading...</p>);
//     return (
//       <div>
//         <select onChange={e => {       
//           const filtered = pets.filter(pet => {
//              return pet.type===e.target.value;
//           })
//           this.setState({...this.state, filteredPets: filtered, filter: e.target.value});
//         }}>
//           <option value='all pets'> all pets</option>
//           {pets.map(pet => {
//             return <option key={pet._id} value={pet.type}>{pet.type}</option>
//           })}
//         </select>
//         <div>See all {this.state.filter}:</div>       
//       </div>
//     )
//   }
// }
// //<Route path={match.url + `/filter/${this.state.filter}`} render={() => (<p>here</p>)}/>
