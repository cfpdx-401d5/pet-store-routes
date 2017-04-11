import React from 'react';
import fetcher from '../helpers/fetcher';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            token: ''
        };
        this.handleFormSignup = this.handleFormSignup.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleFormSignup(e) {
        e.preventDefault();

        console.log('STATE', this.state);
        const payload = {
            username: this.state.username,
            password: this.state.password
        };

        fetcher({ method: 'POST', path: '/auth/signup', body: payload })
            .then(res => {
                console.log(res.token);
                localStorage.setItem('token', res.token);
                this.setState({ token: res.token });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    handleChange(e) {
        console.log('E TARGET', e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <p>Sign Up</p>
                <form role='form'>
                    <input name='username' type='text' onChange={this.handleChange} placeholder='Username' />
                    <input name='password' type='password' onChange={this.handleChange} placeholder='Password' />
                    <button type='submit' onClick={this.handleFormSignup}>Submit</button>
                </form>
            </div>
        )
    }
}