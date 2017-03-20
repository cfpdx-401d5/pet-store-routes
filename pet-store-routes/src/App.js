import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Stores">Stores</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/Stores" component={Stores}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Stores = ({ match }) => (
  <div>
    <h2>Stores</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Hillsdale
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Vista
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Downtown
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:storesId`} component={Store}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a store.</h3>
    )}/>
  </div>
)

const Store = ({ match }) => (
  <div>
    <h3>{match.params.storesId}</h3>
  </div>
)

export default BasicExample