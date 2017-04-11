import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Pets = ({ match }) => (
    <div>
        <h3>{match.params.petId}</h3>
    </div>
)

export default class StoreOne extends React.Component {
    render() {
        return (
            <div>
                <h2>Store One:</h2>
                <ul>
                    <li><Link to="/stores/store_one/breezy">Breezy</Link></li>
                    <li><Link to="/stores/store_one/princess">Princess</Link></li>
                </ul>

                <Route path={"/stores/store_one/:petId"} component={Pets} />
                <Route exact path="/stores/store_one" render={() => (
                    <h3>Please select a pet</h3>
                )} />
            </div>
        )
    }
}
