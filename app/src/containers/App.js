import React from 'react';
import NavBar from '../components/NavBar';
import PageBody from '../components/PageBody';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import fetcher from '../helpers/fetcher';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stores: [],
    };
  }

  doFetch() {
    fetcher({
      path: '/stores',
      method: 'GET',
    })
    .then(res => {
      return res.json();
    })
    .then(stores => {
      this.setState({ stores });
    });
  }

  componentDidMount() {
    this.doFetch();
  }

  render() {
    return (
      <Router>
        <div>
          < Route path='/' component={ NavBar } />
          < PageBody stores={ this.state.stores } />
        </div>
      </Router>
    );
  }
}
