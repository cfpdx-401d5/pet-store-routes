import React from 'react';
import fetcher from '../helpers/fetcher';

export default class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            token: ''
        };
        this.handleFormSignin = this.handleFormSignin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleFormSignin(e) {
        e.preventDefault();

        const payload = {
            username: this.state.username,
            password: this.state.password
        };

        fetcher({ method: 'POST', path: '/auth/signin', body: payload })
            .then(res => this.setState({ token: res.token }))
            .catch((err) => {
                console.error(err);
            });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <p>Sign In</p>
                <form role='form'>
                    <input type='text' controlFunc={this.handleChange} placeholder='Username' />
                    <input type='password' controlFunc={this.handleChange} placeholder='Password' />
                    <button type='submit' onClick={this.handleFormSignin}>Submit</button>
                </form>
            </div>
        )
    }
}