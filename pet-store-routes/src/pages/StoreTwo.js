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

export default class StoreTwo extends React.Component {
    render() {
        return (
            <div>
                <h2>Store Two:</h2>
                <ul>
                    <li><Link to="/stores/store_two/harambe">RIP Harambe</Link></li>
                    <li><Link to="/stores/store_two/packy">Packy</Link></li>
                </ul>

                <Route path={"/stores/store_two/:petId"} component={Pets} />
                <Route exact path="/stores/store_two" render={() => (
                    <h3>Please select a pet</h3>
                )} />
            </div>
        )
    }
}