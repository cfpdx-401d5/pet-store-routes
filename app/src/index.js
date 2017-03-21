import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import StoreList from './components/StoreList';
import Cart from './components/CartList';

const store = configureStore();

function Root() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path='/' component={App}/>
            <Route path='/stores' component={StoreList}/>
            <Route path='/cart' component={Cart}/>
          </div>
        </Router>
      </Provider>
    );
}

render(<Root />, document.querySelector('#root'));
