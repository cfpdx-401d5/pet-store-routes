import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const StoreLocation = ({ match }) => (
    <div>
        <h3>{match.params.storeId}</h3>
    </div>
)

export default class Store extends React.Component {
    render() {
        return (
            <div>
                <h2>Stores:</h2>
                <ul>
                    <li><Link to="/stores/store_one">Store One</Link></li>
                    <li><Link to="/stores/store_two">Store Two</Link></li>
                </ul>

                <Route path={"/stores/:storeId"} component={StoreLocation} />
                <Route exact path="/stores" render={() => (
                    <h3>Please select a store location</h3>
                )} />
            </div>
        )
    }
}
