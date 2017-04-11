import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Stores extends Component {
    constructor(props){
        super(props);
        this.state={
            stores: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/pet-store')
            .then(res => res.json())
            .then(storeList => {
                this.setState(
                    { stores: storeList }
                )
            })
    }
    render(){
        return(
        <div>
            <ul>
                {this.state.stores.map(s => {
                    return (
                        <li key={s._id}>
                            <Link to={`/stores/${s._id}`}>      {s.name} : {s.location}
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

