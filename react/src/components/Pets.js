import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Pets extends Component {
    constructor(props){
        super(props);
        this.state={
            pets: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/pets')
            .then(res => res.json())
            .then(pets => {
                this.setState(
                    { pets }
                )
                // console.log(this.state.pets);
            })
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.pets.map(p => {
                        return (
                            <li key={p._id}>
                                <Link to={`/stores/${p._id}`}>
                                    Name: {p.petName}
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}