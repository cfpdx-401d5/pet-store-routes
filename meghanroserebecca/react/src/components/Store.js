import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Pets from './Pets';
import Pet from './Pet';

export default class Store extends Component {
    constructor(props){
        super(props);
        this.state={
            store: {},
        }
    }

    componentDidMount(){
        fetch(`http://localhost:8000/pet-store/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(store => {
                this.setState(
                    { store }
                )
            })
    }

    render() {
        return(
            <div>
                <h2>{this.state.store.name}</h2>
                <div>
                    <Link to={`${this.props.match.url}/pets`}>
                        Pets
                    </Link>
                    <Route path="/stores/:id/pets" component={Pets}/>
                    <Route path="/stores/:id/pets/:petId" component={Pet}/>
                </div>
            </div>
        )
    }
}