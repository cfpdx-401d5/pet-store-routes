import React, { Component } from 'react';

export default class Pet extends Component {
    constructor(props){
        super(props);
        this.state={
            pet: {},
            isLoading: true,
        }
    }

    componentWillMount(){
        fetch(`http://localhost:8000/pets/${this.props.match.params.petId}`)
            .then(res => res.json())
            .then(pet => {
                this.setState({ pet });
                this.setState({ isLoading: false });
            })
    }

    render() {
        console.log(this.state.pet);
        if (!this.state.isLoading){
        return(
            <div>
                <h1>{this.state.pet.petName}</h1> 
                <p>{this.state.pet.petName} is a wonderful {this.state.pet.petAge} year old {this.state.pet.petBreed[0].breedName}</p>
                <p>{this.state.pet.petDescription}</p>
            </div>
        )}
        else return(
            <div>Loading...</div>
        )
    }
}