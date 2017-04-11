import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { sendLogin, sendSignUp } from '../actions/auth';

function SignIn(props) {
    return (
        <form>
            <fieldset>
                <legend>Log In</legend>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' onChange={props.namechange} value={props.placeholder.name}/><br />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' onChange={props.passwordChange} value={props.placeholder.password}/><br />
                <button onClick={props.onLogin}>LogIn</button>
                <button onClick={props.clear}>Cancel</button>
            </fieldset>
        </form>
    );
}

function SignUp(props) {
    return (
        <form>
            <fieldset>
                <legend>Sign Up</legend>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' onChange={props.namechange} value={props.placeholder.name} /><br />
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' onChange={props.emailChange} value={props.placeholder.email}/><br />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' onChange={props.passwordChange} value={props.placeholder.password}/><br />
                <button onClick={props.onSignup}>Sign Up</button>
                <button onClick={props.clear}>Cancel</button>
            </fieldset>
        </form>
    );
}

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.submitLogIn = this.submitLogIn.bind(this);
        this.submitSignUp = this.submitSignUp.bind(this);
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            name: '',
            email: '',
            password: ''
        });
    }

    submitLogIn(e) {
        e.preventDefault();
        const formPayload = {
            name: this.state.name,
            password: this.state.password
        };
        this.props.sendLogin({ method: 'POST', path: '/auth/signin', body: formPayload });
        this.handleClearForm(e);
    }

    submitSignUp(e) {
        e.preventDefault();
        const formPayload = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        this.props.sendSignUp({ method: 'POST', path: '/auth/signup', body: formPayload });
        this.handleClearForm(e);
    }

    render() {
        return (
            <Tabs>
                <TabList>
                    <Tab>Log In</Tab>
                    <Tab>Sign Up</Tab>
                </TabList>
                <TabPanel>
                    <SignIn namechange={this.handleNameChange} passwordChange={this.handlePasswordChange} onLogin={this.submitLogIn} clear={this.handleClearForm} placeholder={this.state} />
                </TabPanel>
                <TabPanel>
                    <SignUp namechange={this.handleNameChange} emailChange={this.handleEmailChange} passwordChange={this.handlePasswordChange} clear={this.handleClearForm} onSignup={this.submitSignUp} placeholder={this.state} />
                </TabPanel>
            </Tabs>
        );  
    }
}

function mapStateToProps(state) {
    console.log('state: ', state);
    return {
        token: state.userAuth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendLogin: (options) => dispatch(sendLogin(options)),
        sendSignUp: (options) => dispatch(sendSignUp(options))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

SignIn.propTypes = {
    namechange: React.PropTypes.func,
    passwordChange: React.PropTypes.func,
    onLogin: React.PropTypes.func,
    clear: React.PropTypes.func,
    placeholder: React.PropTypes.object
};

LogIn.propTypes = {
    sendLogin: React.PropTypes.func,
    formPayload: React.PropTypes.object,
    sendSignUp: React.PropTypes.func
};

SignUp.propTypes = {
    namechange: React.PropTypes.func,
    emailChange: React.PropTypes.func,
    passwordChange: React.PropTypes.func,
    onSignup: React.PropTypes.func,
    clear: React.PropTypes.func,
    placeholder: React.PropTypes.object
};
