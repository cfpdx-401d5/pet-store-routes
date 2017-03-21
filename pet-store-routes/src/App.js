import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/Home';
import Store from './pages/Store';
import StoreOne from './pages/StoreOne';
import StoreTwo from './pages/StoreTwo';


export default function App () {
  return (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stores">Store</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/stores" component={Store}/>
      <Route path="/stores/store_one" component={StoreOne}/>
      <Route path="/stores/store_two" component={StoreTwo}/>
    </div>
  </Router>
  )
}
