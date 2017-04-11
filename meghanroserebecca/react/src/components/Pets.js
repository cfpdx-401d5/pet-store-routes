import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// import { Pet } from './Pet';

export default class Pets extends Component {
    constructor(props){
        super(props);
        this.state={
            pets: [],
            isLoading: true,
        }
    }

    componentWillMount() {
        if (localStorage) {
            const token = localStorage.getItem('token');
                
            fetch('http://localhost:8000/pets', {
                method: 'GET',
                headers: {
                    'Authorization': token
                }
            })
                .then(res => res.json())
                .then(pets => {
                    this.setState({ pets });
                    this.setState({ isLoading: false });
                    // console.log(this.state.pets);
                });
        }
        else console.log('You are not logged in');
    }

    render(){
        if (!this.state.isLoading){
            console.log(this.state.pets);
        return (
            <div>
                <ul>
                    {this.state.pets.map(p => {
                        return (
                            <li key={p._id}>
                                <Link to={`${this.props.match.url}/${p._id}`}>
                                    Name: {p.petName}
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        )}
        else {
            return (
                <h1>Loading...</h1>
            )
        }
    }
}